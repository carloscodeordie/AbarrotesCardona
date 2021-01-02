import { Provider } from "./Provider";

export interface Product
{
    id: number;
    name: string;
    brand: string;
    price: number;
    provider: Provider;
}