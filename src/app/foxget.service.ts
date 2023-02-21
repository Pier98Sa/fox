import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fox } from './Fox';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoxgetService {

  constructor(private httpClient: HttpClient) { }

  private url = 'https://randomfox.ca/floof';

  /**
   * Oggetto asincrono su cui il client può dormire
   * sino a quando non arrivano i dati
   */
  getFox(): Observable<Fox>{
    return this.httpClient.get<Fox>(this.url);
  }
}
