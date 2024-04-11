import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('decimal', { precision: 5, scale: 2 })
    amount!: number;

    @Column({ type: "date" })
    date!: string;

    @Column()
    description!: string;

    @Column()
    category!: string;
}
