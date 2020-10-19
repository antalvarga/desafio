import Availability from '../models/Availability';

export default {
    render( availability: Availability) {
        return {
            id: availability.id
            , ddd: availability.ddd
            , 
        }
    }
    , renderMany( availability: Availability[]) {
        return availability.map(availability => this.render(availability));
    }
}