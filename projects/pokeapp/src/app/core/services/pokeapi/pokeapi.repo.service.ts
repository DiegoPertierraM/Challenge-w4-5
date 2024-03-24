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

  getPokemonResponse(offset: number = 0): Observable<PokemonResponse> {
    if (!offset) {
      return this.http.get<PokemonResponse>(this.pokeUrl);
    } else {
      const nextUrl = new URL(
        `?offset=${offset}&limit=20`,
        this.pokeUrl
      ).toString();
      return this.http.get<PokemonResponse>(nextUrl);
    }
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
  // if (offset === 0) {

  // }
}
