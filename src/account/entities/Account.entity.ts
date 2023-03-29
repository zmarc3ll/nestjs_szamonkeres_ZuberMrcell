import { IsNumber } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Owner from "../../owner/entities/Owner.entity";

@Entity()
export default class Account {

    @PrimaryGeneratedColumn()
    id:number;

    @IsNumber()
    @Column()
    accountNumber: number;

    @IsNumber()
    @Column()
    balance: number;

    @OneToOne(type => Owner)
    @JoinColumn()
    owner: Owner;
}