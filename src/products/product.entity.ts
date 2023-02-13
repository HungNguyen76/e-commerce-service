import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsStatus } from './product-status.enum';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  subTitle: string;

  @Column()
  desc: string;

  @Column()
  color: number;

  @Column()
  reviews: number;

  @Column()
  stars: number;

  @Column()
  price: string;

  @Column()
  stock: number;

  @Column()
  status: ProductsStatus;
}
