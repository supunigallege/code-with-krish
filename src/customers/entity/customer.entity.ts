import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({ type: 'varchar', length: 255 })
  name: string; 

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string; 

  @Column({ type: 'varchar', length: 255, nullable: true })
  address?:string;

}
