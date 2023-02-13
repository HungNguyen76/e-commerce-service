import { IsEnum } from 'class-validator';
import { ProductsStatus } from '../product-status.enum';

export class UpdateProductStatusDto {
  @IsEnum(ProductsStatus)
  status: ProductsStatus;
}
