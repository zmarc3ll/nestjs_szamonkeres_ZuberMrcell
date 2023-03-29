import { IsBoolean, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    fullName: string;

    @IsBoolean()
    @Column()
    business: boolean;
}