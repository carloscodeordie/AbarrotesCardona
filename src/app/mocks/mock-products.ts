import { Product } from '../interfaces/Product';

export const PRODUCTS: Product[] = [
    { 
      id: 1, 
      name: 'Axion', 
      brand: 'KC', 
      price: 100, 
      provider: {
        id: 1,
        name: 'Don Paco'
      } 
    },
    { 
      id: 2, 
      name: 'Galletas Maria', 
      brand: 'Marinela', 
      price: 200, 
      provider: {
        id: 1,
        name: 'Don Paco'
      } 
    },
  ];