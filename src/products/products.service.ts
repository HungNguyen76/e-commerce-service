import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsStatus } from './product-status.enum';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
  ) {}
  async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    return this.productsRepository.getProducts(filterDto);
  }
  async getProductById(id: string): Promise<Product> {
    const found = await this.productsRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Product with id "${id}" not found`);
    }
    return found;
  }
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productsRepository.createProduct(createProductDto);
  }
  async deleteProduct(id: string): Promise<void> {
    const result = await this.productsRepository.delete(id);
    console.log(
      '🚀 ~ file: products.service.ts:30 ~ ProductsService ~ deleteProduct ~ result',
      result,
    );
  }
  async updateProductStatus(
    id: string,
    status: ProductsStatus,
  ): Promise<Product> {
    const product = await this.getProductById(id);
    product.status = status;
    await this.productsRepository.save(product);
    return product;
  }
}
