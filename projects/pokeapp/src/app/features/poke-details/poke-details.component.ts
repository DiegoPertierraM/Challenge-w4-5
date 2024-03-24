import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PokemonDetails } from '../../core/models/pokeModel';
import { PokeapiRepoService } from '../../core/services/pokeapi/pokeapi.repo.service';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'isdi-poke-details',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    @if (pokemon) {
    <ul class="poke-details">
      <fa-icon [icon]="faLeftLong" (click)="goBack()"></fa-icon>
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
      @if (pokemon.abilities) {
      <li class="poke-abilities">
        <h2>Abilities:</h2>
        <span>{{ pokemon.abilities[0].ability.name }}</span>
        @if (pokemon.abilities.length > 1) {
        <span>{{ pokemon.abilities[1].ability.name }}</span>
        }
      </li>
      }
      <br />
      <hr />
      <li>
        <ul class="poke-stats">
          <li class="poke-stat">
            <span>{{ pokemon.stats[0].stat.name }}:</span>
            <span [class]="chooseStatColor(pokemon.stats[0].base_stat)">{{
              pokemon.stats[0].base_stat
            }}</span>
          </li>
          <li class="poke-stat">
            <span>{{ pokemon.stats[1].stat.name }}:</span>
            <span [class]="chooseStatColor(pokemon.stats[1].base_stat)">
              {{ pokemon.stats[1].base_stat }}</span
            >
          </li>
          <li class="poke-stat">
            <span>{{ pokemon.stats[2].stat.name }}:</span>
            <span [class]="chooseStatColor(pokemon.stats[2].base_stat)">
              {{ pokemon.stats[2].base_stat }}</span
            >
          </li>
          <li class="poke-stat">
            <span>{{ pokemon.stats[3].stat.name }}:</span>
            <span [class]="chooseStatColor(pokemon.stats[3].base_stat)">
              {{ pokemon.stats[3].base_stat }}</span
            >
          </li>
          <li class="poke-stat">
            <span>{{ pokemon.stats[4].stat.name }}:</span>
            <span [class]="chooseStatColor(pokemon.stats[4].base_stat)">{{
              pokemon.stats[4].base_stat
            }}</span>
          </li>
          <li class="poke-stat">
            <span>{{ pokemon.stats[5].stat.name }}:</span>
            <span [class]="chooseStatColor(pokemon.stats[5].base_stat)">{{
              pokemon.stats[5].base_stat
            }}</span>
          </li>
        </ul>
      </li>
    </ul>
    }
  `,
  styleUrl: './poke-details.component.css',
})
export default class PokeDetailsComponent implements OnInit {
  pokemon: PokemonDetails | undefined;
  faLeftLong = faLeftLong;

  constructor(
    private route: ActivatedRoute,
    private pokeapiRepoService: PokeapiRepoService,
    private _location: Location
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

  goBack() {
    this._location.back();
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

  chooseStatColor(stat: number) {
    if (stat < 50) {
      return 'awful';
    } else if (stat < 70) {
      return 'low';
    } else if (stat < 100) {
      return 'mid';
    } else if (stat < 130) {
      return 'high';
    } else {
      return 'goated';
    }
  }
}
