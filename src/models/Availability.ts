import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

import Plans from './Plans';



export default class Availability {

    id: number;

    ddd: string;

    @ManyToOne(() => Plans, plans => plans.id)
    @JoinColumn( { name: 'plans_id' } )
    plans: Plans;
}