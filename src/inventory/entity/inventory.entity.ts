
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column('varchar', { length: 255 })
  name: string; 

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number; 
}
