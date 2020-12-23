import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { PROVIDERS } from '../../mocks/mock-providers';
import { Provider } from '../../interfaces/Provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }

  getProviders(): Observable<Provider[]> {
    return of(PROVIDERS);
  }
}
