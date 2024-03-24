import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon, PokemonBase, PokemonResponse } from '../../models/pokeModel';

const baseUrl = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root',
})
export class PokeapiRepoService {
  private pokeUrl = new URL('pokemon', baseUrl).toString();
  pokemonList: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  getPokemonResponse(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.pokeUrl);
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
  // if (offset === 0) {

  // }
}
