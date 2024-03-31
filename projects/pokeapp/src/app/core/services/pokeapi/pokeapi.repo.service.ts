import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Pokemon,
  PokemonDetails,
  PokemonResponse,
} from '../../models/pokeModel';

// const baseUrl = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root',
})
export class PokeapiRepoService {
  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';
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

  getPokemonById(id: number) {
    const idUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<PokemonDetails>(idUrl);
  }
}
