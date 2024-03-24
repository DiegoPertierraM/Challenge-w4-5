import { Component, OnInit } from '@angular/core';
import { PokeapiRepoService } from '../../core/services/pokeapi/pokeapi.repo.service';
import { Pokemon, PokemonBase } from '../../core/models/pokeModel';
import { PokeCardComponent } from '../poke-card/poke-card.component';

@Component({
  selector: 'isdi-poke-list',
  standalone: true,
  imports: [PokeCardComponent],
  template: `
    <ul class="poke-list">
      @for (pokemon of pokemonList; track $index) {
      <isdi-poke-card [pokeInfo]="pokemon" />
      }
    </ul>
  `,
  styleUrl: './poke-list.component.css',
})
export default class PokeListComponent implements OnInit {
  pokemonBase: PokemonBase[] = [];
  pokemonList: Pokemon[] = [];

  constructor(private pokeapiRepoService: PokeapiRepoService) {}

  ngOnInit(): void {
    this.pokeapiRepoService.getPokemonResponse().subscribe({
      next: (data) => {
        data.results.map(async (pokemon) => {
          this.pokeapiRepoService.getPokemonDetails(pokemon.url).subscribe({
            next: (data: Pokemon) => {
              this.pokemonList = [...this.pokemonList, data];
            },
          });
        });
      },
    });
  }
}
