import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

import Plans from './Plans';


@Entity('availability')
export default class Availability {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    ddd: string;

    
    @ManyToOne(() => Plans, plans => plans.id)
    // ou id ???
    @JoinColumn( { name: 'plans_id' } )
    plans: Plans;
    
}