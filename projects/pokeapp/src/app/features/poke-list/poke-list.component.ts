import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokeapiRepoService } from '../../core/services/pokeapi/pokeapi.repo.service';
import { Pokemon, PokemonBase } from '../../core/models/pokeModel';
import { PokeCardComponent } from '../poke-card/poke-card.component';
import { PokeService } from '../../core/services/poke-service/poke.service';

@Component({
  selector: 'isdi-poke-list',
  standalone: true,
  imports: [PokeCardComponent],
  template: `
    <div class="btns">
      <button class="prev-btn" (click)="previousPokemon()">Previous</button>
      <button class="next-btn" (click)="nextPokemon()">Next</button>
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
  // offset = 0;

  constructor(
    private pokeSrv: PokeService,
    private router: Router,
    private pokeApiSrv: PokeapiRepoService
  ) {}

  ngOnInit(): void {
    this.pokeSrv.pokemon.subscribe((pokeList) => {
      this.pokemonList = pokeList;
      console.log(this.pokemonList);
    });
  }

  nextPokemon() {
    this.pokeSrv.nextPokemon();
    console.log(this.pokemonList);
    console.log(this.pokeApiSrv.offset);
  }

  previousPokemon() {
    this.pokeSrv.previousPokemon();
    console.log(this.pokemonList);
    console.log(this.pokeApiSrv.offset);
  }

  goToDetails(id: number) {
    this.router.navigate([`/poke_details/${id}`]);
  }
}
