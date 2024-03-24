import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from '../../core/models/pokeModel';
import { PokeapiRepoService } from '../../core/services/pokeapi/pokeapi.repo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'isdi-poke-details',
  standalone: true,
  imports: [],
  template: `
    @if (pokemon) {
    <ul class="poke-details">
      <li class="poke-name">{{ pokemon.name }}</li>
      <li>Id: {{ pokemon.id }}</li>
      <li>
        <h2>Sprites:</h2>
        <ul class="poke-sprites">
          <li class="poke-img">
            <img
              src="{{ pokemon.sprites.front_default }}"
              alt="Imagen de {{ pokemon.name }}"
            />
          </li>
          <li class="poke-img">
            <img
              src="{{ pokemon.sprites.back_default }}"
              alt="Imagen de {{ pokemon.name }}"
            />
          </li>
          <li class="poke-img">
            <img
              src="{{ pokemon.sprites.front_shiny }}"
              alt="Imagen de {{ pokemon.name }}"
            />
          </li>
          <li class="poke-img">
            <img
              src="{{ pokemon.sprites.back_shiny }}"
              alt="Imagen de {{ pokemon.name }}"
            />
          </li>
        </ul>
      </li>
      <li class="poke-types-container">
        <h2>Types:</h2>
        <ul class="poke-types">
          <li
            class="poke-type"
            [class]="chooseType(pokemon.types[0].type.name)"
          >
            {{ pokemon.types[0].type.name.toUpperCase() }}
          </li>
          @if (pokemon.types[1]) {
          <li
            class="poke-type"
            [class]="chooseType(pokemon.types[1].type.name)"
          >
            {{ pokemon.types[1].type.name.toUpperCase() }}
          </li>
          }
        </ul>
      </li>
      <li><span>Height:</span> {{ pokemon.height }}</li>
      <li><span>Weight:</span> {{ pokemon.weight }}</li>
      <li class="poke-abilities">
        <h2>Abilities:</h2>
        <span>{{ pokemon.abilities[0].ability.name }}</span>
        @if (pokemon.abilities[1].ability.name) {
        <span>{{ pokemon.abilities[1].ability.name }}</span>
        }
      </li>
    </ul>
    }
  `,
  styleUrl: './poke-details.component.css',
})
export default class PokeDetailsComponent implements OnInit {
  pokemon: PokemonDetails | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokeapiRepoService: PokeapiRepoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.loadPokemonById(id);
    });
  }

  loadPokemonById(id: number) {
    this.pokeapiRepoService.getPokemonById(id).subscribe({
      next: (data: PokemonDetails) => {
        this.pokemon = data;
      },
    });
  }

  chooseType(type: string): string {
    switch (type) {
      case 'normal':
        return 'normal';
      case 'fire':
        return 'fire';
      case 'water':
        return 'water';
      case 'electric':
        return 'electric';
      case 'grass':
        return 'grass';
      case 'ice':
        return 'ice';
      case 'fighting':
        return 'fighting';
      case 'poison':
        return 'poison';
      case 'ground':
        return 'ground';
      case 'flying':
        return 'flying';
      case 'psychic':
        return 'psychic';
      case 'bug':
        return 'bug';
      case 'rock':
        return 'rock';
      case 'ghost':
        return 'ghost';
      case 'dragon':
        return 'dragon';
      case 'dark':
        return 'dark';
      case 'steel':
        return 'steel';
      case 'fairy':
        return 'fairy';
      case 'stellar':
        return 'stellar';
      default:
        return '';
    }
  }
}
