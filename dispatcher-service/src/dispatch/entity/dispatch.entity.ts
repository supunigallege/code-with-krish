import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class dispatch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehical_num: string;

  @Column()
  city:string;
}
