import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiRepoService {
  baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {

    getPokemonData() {
      return this.http.get(`${this.baseUrl}/pokemon`);
    }
  }
}
