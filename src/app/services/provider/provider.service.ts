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

  getProviderByName(providers: Provider[], name: string): Provider {
    let searchedProvider: Provider;
    // TODO: Change this later to use something more complex
    for(let i = 0; i < providers.length; i++)
    {
      const prov = providers[i];
      if(prov.name == name)
      {
        searchedProvider = prov;
        break;
      }
    }
    return searchedProvider;
  }
}
