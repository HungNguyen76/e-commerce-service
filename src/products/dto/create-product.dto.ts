import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  subTitle: string;
  @IsNotEmpty()
  color: number;
  @IsNotEmpty()
  colors: Array<any>;
  @IsNotEmpty()
  reviews: number;
  @IsNotEmpty()
  stars: number;
  @IsNotEmpty()
  price: string;
  @IsNotEmpty()
  stock: number;
  @IsNotEmpty()
  desc: string;
}
