import { Provider } from "./Provider";

export interface Product
{
    id: number;
    code: number;
    name: string;
    description: string;
    price_buy: number;
    price_sale: number;
    minimum_stock: number;
    current_stock: number;
    provider: Provider;
}