import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';

import Availability from './Availability';



@Entity('plans')
export default class Plans {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    description : string;
    
    @Column()
    minutes: string;
    
    @Column()
    internet: string;
    
    @Column()
    cost: number;   
    
    @Column()
    type: string;
    
    @Column()
    operator: string;


    // TODO - RELACIONAMENTO
    // @OneToMany( () => Availability, availability => availability.plans, {
    //     cascade: [ 'insert', 'update']
    // })
    // @JoinColumn( {name: 'plans_id' })
    // availability: Availability;

    @OneToMany(() => Availability, availability => availability.plans )
    @JoinColumn({ name: 'plans_id'})
    availabilities: Availability[];

}