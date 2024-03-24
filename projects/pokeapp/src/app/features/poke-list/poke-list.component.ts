import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokeapiRepoService } from '../../core/services/pokeapi/pokeapi.repo.service';
import { Pokemon, PokemonBase } from '../../core/models/pokeModel';
import { PokeCardComponent } from '../poke-card/poke-card.component';

@Component({
  selector: 'isdi-poke-list',
  standalone: true,
  imports: [PokeCardComponent],
  template: `
    <div class="btns">
      <button class="prev-btn" (click)="previousPokemon(offset)">
        Previous
      </button>
      <button class="next-btn" (click)="nextPokemon(offset)">Next</button>
    </div>
    <ul class="poke-list">
      @for (pokemon of pokemonList; track $index) {
      <isdi-poke-card [pokeInfo]="pokemon" (click)="goToDetails(pokemon.id)" />
      }
    </ul>
  `,
  styleUrl: './poke-list.component.css',
})
export default class PokeListComponent implements OnInit {
  pokemonBase: PokemonBase[] = [];
  pokemonList: Pokemon[] = [];
  offset = 0;

  constructor(
    private pokeapiRepoService: PokeapiRepoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialPokemon();
    console.log(this.offset);
  }

  initialPokemon() {
    this.pokeapiRepoService.getPokemonResponse().subscribe({
      next: (data) => {
        data.results.map((pokemon) => {
          this.pokeapiRepoService.getPokemonDetails(pokemon.url).subscribe({
            next: (data: Pokemon) => {
              this.pokemonList = [...this.pokemonList, data];
            },
          });
        });
      },
    });
  }

  loadNewPokemon(offset: number) {
    this.pokemonList = [];
    this.pokeapiRepoService.getPokemonResponse(offset).subscribe({
      next: (data) => {
        data.results.map((pokemon) => {
          this.pokeapiRepoService.getPokemonDetails(pokemon.url).subscribe({
            next: (data: Pokemon) => {
              this.pokemonList = [...this.pokemonList, data];
            },
          });
        });
      },
    });
  }

  nextPokemon(offset: number) {
    if (offset >= 1300) return;
    this.offset += 20;
    console.log(this.offset);
    this.loadNewPokemon(this.offset);
  }

  previousPokemon(offset: number) {
    if (offset <= 0) return;
    this.offset -= 20;
    console.log(this.offset);
    this.loadNewPokemon(this.offset);
  }

  goToDetails(id: number) {
    this.router.navigate([`/poke_details/${id}`]);
  }
}
