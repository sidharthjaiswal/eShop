import { Address } from './adress';
import { Product } from './product';
import { ShoppingStatus } from './shoppingStatus';


export interface Order {
    id: number;
    products: Product[];
    name?: string;
    date: Date;
    status: ShoppingStatus;
    address?: Address;
}