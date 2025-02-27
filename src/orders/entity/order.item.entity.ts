import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";
import { Order } from "./order.entity";
@Entity()
export class OrderItem{
    @PrimaryGeneratedColumn()
        id:number;
        @Column()
        productId:number;
        @Column('decimsl')
        price:number;
        @ManyToOne( ()=>Order ,(order)=>order.items, {onDelete:'CASCADE'})
        order:Order;
    
}