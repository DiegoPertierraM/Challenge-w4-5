import { Component, Input } from '@angular/core';
import { Pokemon } from '../../core/models/pokeModel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'isdi-poke-card',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <li class="poke-card">
      <ul>
        <li class="poke-img">
          <img
            src="{{ pokeInfo.sprites.front_default }}"
            alt="Imagen de {{ pokeInfo.name }}"
          />
        </li>
        <li>
          <ul class="id-favourite-row">
            <li>#{{ pokeInfo.id }}</li>
            <li>
              @if (!pokeInfo.isFavorite) {
              <fa-icon
                [icon]="faHeart"
                (click)="pokeInfo.isFavorite = true"
              ></fa-icon>
              } @else {
              <fa-icon
                [icon]="faHeartSolid"
                (click)="pokeInfo.isFavorite = false"
              ></fa-icon>
              }
            </li>
          </ul>
        </li>
        <li class="poke-name">{{ pokeInfo.name }}</li>
        <li class="poke-types-container">
          <ul class="poke-types">
            <li
              class="poke-type"
              [class]="chooseType(pokeInfo.types[0].type.name)"
            >
              {{ pokeInfo.types[0].type.name.toUpperCase() }}
            </li>
            @if (pokeInfo.types[1]) {
            <li
              class="poke-type"
              [class]="chooseType(pokeInfo.types[1].type.name)"
            >
              {{ pokeInfo.types[1].type.name.toUpperCase() }}
            </li>
            }
          </ul>
        </li>
        <li>Height: {{ pokeInfo.height }}</li>
        <li>Weight: {{ pokeInfo.weight }}</li>
      </ul>
    </li>
  `,
  styleUrl: './poke-card.component.css',
})
export class PokeCardComponent {
  @Input() pokeInfo!: Pokemon;
  faHeart = faHeart;
  faHeartSolid = faHeartSolid;

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
