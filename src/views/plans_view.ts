import Plans from '../models/Plans';

// TODO - VERIFICAR RELACIONAMENTO
//import availabilityView from './'

export default {
    render( plans: Plans) {

        return {
            id: plans.id
            , description: plans.description
            , minutes: plans.minutes
            , internet: plans.internet
            , cost: plans.cost
            , type: plans.type
            , operator: plans.operator
            ,

        };
    }

    // Devido a alguma incompatibilidade não foi possivel usar polimorfismo
    //, render( plans: Plans[]) {}
    , renderMany( plans: Plans[]) {
        return plans.map(plan => this.render(plan));
    }
}