export interface Product {
  id: string;
  name: string;
  image: string;
  title: string;
  subTitle: string;
  color: number;
  reviews: number;
  stars: number;
  price: string;
  stock: number;
  desc: string;
  status: ProductsStatus;
}

export enum ProductsStatus {
  NEW = 'NEW',
  OLD = 'OLD',
  BEST_SELLER = 'BEST_SELLER',
}
