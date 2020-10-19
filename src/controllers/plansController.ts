import {Request, Response} from 'express';

import {getRepository} from 'typeorm';

import plansView from '../views/plans_view';

import Plans from '../models/Plans';

import * as Yup from 'yup';





export default {

    // todo 
    // const plansRepository = getRepository(Plans);

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


    }

    , async create (request: Request, response: Response) {

        // TODO preciso debugar para achar os 
        // ddds de availability
        console.log( request.body);

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

        const plans = plansRepository.create( data );

        await plansRepository.save( plans );

        return response.status(201).json( plans );
    }

};