import { Injectable, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokeModel';
import { BehaviorSubject } from 'rxjs';
import { PokeapiRepoService } from '../pokeapi/pokeapi.repo.service';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private pokemonList: Pokemon[] = [];
  private pokemon$ = new BehaviorSubject<Pokemon[]>([]);

  constructor(private pokeSrv: PokeapiRepoService) {
    this.initialPokemon();
  }

  get pokemon() {
    return this.pokemon$.asObservable();
  }

  initialPokemon() {
    this.pokeSrv.getPokemonResponse(0).subscribe({
      next: (data) => {
        data.results.map((pokemon) => {
          this.pokeSrv.getPokemonDetails(pokemon.url).subscribe({
            next: (data: Pokemon) => {
              this.pokemonList = [...this.pokemonList, data];
            },
          });
        });
      },
    });
  }
}
