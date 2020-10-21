import Plans from '../models/Plans';


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

    , renderMany( plans: Plans[]) {
        return plans.map(plan => this.render(plan));
    }
}