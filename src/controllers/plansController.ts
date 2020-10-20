import {Request, Response} from 'express';

import {getRepository} from 'typeorm';

import plansView from '../views/plans_view';

import Plans from '../models/Plans';
import Availability from '../models/Availability';


import * as Yup from 'yup';




export default {

    // todo 
    // para todas as consultas retornar availability
    // para todas as consultas filtrar por ddd


    async index(request: Request, response: Response) {

        const plansRepository = getRepository(Plans);


        // TODO - Pegar relacionamento
        const plans = await plansRepository.find();
        

        //     const plans = await plansRepository.find({
        //      relations: ['availability']
        //  });

        return response.json( plansView.renderMany(plans));
    }

    , async show(request: Request, response: Response) {

        const {id} = request.params;

        const plansRepository = getRepository(Plans);
        
        //     const plans = await plansRepository.findOneOrFail(id, {
        //     relations: [ 'availability' ]
        // });
        const plans = await plansRepository.findOneOrFail(id);

        return response.json(plansView.render(plans));

    }

    , async showByDddType(request: Request, response: Response) {

        const plansRepository = getRepository(Plans);

        const {ddd, type} = request.params;

        const plans = await plansRepository.find(
            { 
                where: {type: type } 
                , order: {operator: 'ASC', id: 'ASC'}
                , select: ["id", "description", "operator"]
            }
        );

        return response.json( plansView.renderMany(plans));
        
    }

    , async showByDddPlan(request: Request, response: Response) {

        const plansRepository = getRepository(Plans);

        const {ddd, plan} = request.params;

        const plans = await plansRepository.find(
            { 
                where: {id: plan }
                , order: {operator: 'ASC', id: 'ASC'}
                //, select: ["id", "description", "operator"]
            }
        );

        return response.json( plansView.renderMany(plans));
        
    }

    , async showByDddOperator(request: Request, response: Response) {

        const plansRepository = getRepository(Plans);

        const {ddd, operator} = request.params;

        const plans = await plansRepository.find(
            { 
                where: { operator: operator }
                , order: {operator: 'ASC', id: 'ASC'}
                //, select: ["id", "description", "operator"]
            }
        );

        return response.json( plansView.renderMany(plans));
        
    }




    , async create (request: Request, response: Response) {

        const {
            description
            , minutes
            , internet
            , cost
            , type
            , operator 
            , availabilities 
            ,

        } = request.body;

        const plansRepository = getRepository(Plans);

        const data = {
            description
            , minutes
            , internet
            , cost
            , type
            , operator
            , availabilities
            ,
        }

        const schema = Yup.object().shape({

            description : Yup.string().required('Descrição obrigatória')
            , minutes   : Yup.number().required()
            , internet  : Yup.number().required()
            , cost      : Yup.number().required()
            , type      : Yup.string().required()
            , operator  : Yup.string().required()
            , 
        });

        await schema.validate( data, { abortEarly: false })

        const plans = plansRepository.create( data );

        await plansRepository.save( plans );


        return response.status(201).json( plans );
    }

    , async update (request: Request, response: Response) {      

        const { id } = request.params;

        const {            
            description
            , minutes
            , internet
            , cost
            , type
            , operator
            
        } = request.body;

        const plansRepository = getRepository(Plans);

        // preciso avaliar se os ddds virão no request.body

        const data = {
            description
            , minutes
            , internet
            , cost
            , type
            , operator
            ,
        }
        

        const schema = Yup.object().shape({

            description : Yup.string().required('Descrição obrigatória')
            , minutes   : Yup.number().required()
            , internet  : Yup.number().required()
            , cost      : Yup.number().required()
            , type      : Yup.string().required()
            , operator  : Yup.string().required()
            , 
        });

        await schema.validate( data, { abortEarly: false })
       
        await plansRepository.update(id,    data);
        
        const plan = await plansRepository.findOne( id );

        return response.status(200).json( plan );
    }    

    , async delete (request: Request, response: Response) {      

        const { id } = request.params;

        const plansRepository = getRepository(Plans);

        // preciso avaliar se os ddds virão no request.body
        
        await plansRepository.delete( id );
        
        const plan = await plansRepository.findOne( id );

        return response.status(200).json( plan );
    }
     
    



};