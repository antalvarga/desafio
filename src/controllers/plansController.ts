import {Request, Response} from 'express';

import {getRepository} from 'typeorm';

import plansView from '../views/plans_view';

import Plans from '../models/Plans';

import * as Yup from 'yup';


// Os métodos padrão do controller são
// Index
// Show
// Create
// Update
// Delete




export default {

    // todo 
    // const plansRepository = getRepository(Plans);


    // showByDddType 
    // showByDddPlan
    // showByDddOperator


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


        console.log(` --- PASSEI NO showByDddType --- ${ddd} - ${type}`  );

        // TODO - Pegar relacionamento
        // https://github.com/typeorm/typeorm/blob/master/docs/find-options.md
        
        //const plans = await plansRepository.find({ where: { ddd, type } });

/*        
        const plans = await plansRepository.find({
            // join: {
            //     alias: "availability",
            //     leftJoinAndSelect: {
            //         id: "availability.id"
            //                     }
            // } 
            // ,
             where: { type }            
        })
*/





        // *** funcionou retornando resultados ***
        // const plans = await plansRepository.find();
        // const plans = await plansRepository.find( {where: {type : 'POS'  }} );


        // *** não funcionou  ***
        // retorna []
        //const plans = await plansRepository.find( {where: {type: type  }});

        // retorna []
        //const plans = await plansRepository.find( {where: {type : {type}  }} );

        // retorna []
        // const plans = await plansRepository.find( {where: { type }});
        // const plans = await plansRepository.find( {where: {type: type }} );
        const plans = await plansRepository.find(
            { 
                // where: {type: 'POS' }
                where: {type: type }
                , order: {operator: 'ASC', id: 'ASC'}
                , select: ["id", "description", "operator"]
            }

        );
        


        console.log( type );
        console.log( plans );









        //     const plans = await plansRepository.find({
        //      relations: ['availability']
        //  });

        //return response.json( plansView.renderMany(plans));
        //return response.json( {message: 'passou' } )
        return response.json( plans )

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
     
    
// showByDddPlan
    , async showByTeste(request: Request, response: Response) {

        const plansRepository = getRepository(Plans);

        const {parm1, parm2} = request.params;


        console.log(` --- PASSEI NO showByTeste --- ${parm1} - ${parm2}`  );

        const plans = await plansRepository.find(
            { 
                
                where: {id: parm1 }
                , order: {operator: 'ASC', id: 'ASC'}
                , select: ["id", "description", "operator"]
            }

        );
        


        console.log( `parm1: ${parm1} - parm2: ${parm2}` );
        console.log( plans );



        //return response.json( plansView.renderMany(plans));
        //return response.json( {message: 'passou' } )
        return response.json( plans )

    }

};