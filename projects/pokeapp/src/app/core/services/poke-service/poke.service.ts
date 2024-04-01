import { Injectable } from '@angular/core';
import { Pokemon, PokemonBase, PokemonResponse } from '../../models/pokeModel';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { PokeapiRepoService } from '../pokeapi/pokeapi.repo.service';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private pokemonList$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<
    Pokemon[]
  >([]);

  constructor(private pokeApiRepoSrv: PokeapiRepoService) {
    this.fetchPokemonList();
  }

  fetchPokemonList(): void {
    this.pokeApiRepoSrv
      .getPokemonList()
      .subscribe((response: PokemonResponse) => {
        const results = response.results;
        const fetchPokemonDetails = results.map((result: PokemonBase) => {
          return this.pokeApiRepoSrv.getPokemonDetails(result.url);
        });
        forkJoin(fetchPokemonDetails).subscribe((pokemonDetails: Pokemon[]) => {
          const pokemonArray: Pokemon[] = pokemonDetails.map(
            (detail: Pokemon) => {
              return { ...detail };
            }
          );
          this.pokemonList$.next(pokemonArray);
        });
      });
  }

  previousPokemon() {
    if (this.pokeApiRepoSrv.offset > 0) {
      this.pokeApiRepoSrv.offset -= 20;
      this.fetchPokemonList();
    }
  }

  nextPokemon() {
    if (this.pokeApiRepoSrv.offset < 1320) {
      this.pokeApiRepoSrv.offset += 20;
      this.fetchPokemonList();
    }
  }

  get pokemon() {
    return this.pokemonList$.asObservable();
  }
}
