import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProductsStatus } from '../product-status.enum';

export class GetProductsFilterDto {
  @IsOptional()
  @IsEnum(ProductsStatus)
  status?: ProductsStatus;
  @IsOptional()
  @IsString()
  search?: string;
}
