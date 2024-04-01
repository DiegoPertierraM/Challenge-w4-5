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
  offset = 0;
  limit = 20;

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
    );
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  getPokemonById(id: number) {
    const idUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<PokemonDetails>(idUrl);
  }
}
