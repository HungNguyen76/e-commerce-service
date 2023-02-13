import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProductsStatus } from './product-status.enum';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@Injectable()
export class ProductsRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }

  async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('product');
    if (status) {
      query.andWhere('product.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        'LOWER(product.title) LIKE LOWER(:search) OR LOWER(product.desc) LIKE LOWER(:search)',
        {
          search: `%${search}%`,
        },
      );
    }
    const products = await query.getMany();
    return products;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const {
      name,
      image,
      title,
      subTitle,
      desc,
      color,
      reviews,
      stars,
      price,
      stock,
    } = createProductDto;
    const product = this.create({
      name,
      image,
      title,
      subTitle,
      desc,
      color,
      reviews,
      stars,
      price,
      stock,
      status: ProductsStatus.NEW,
    });

    await this.save(product);
    return product;
  }
}
