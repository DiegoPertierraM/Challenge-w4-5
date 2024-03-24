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
            <li><fa-icon [icon]="faHeart"></fa-icon></li>
          </ul>
        </li>
        <li class="poke-name">{{ pokeInfo.name }}</li>
        <li>
          <ul class="poke-types">
            <li
              class="poke-type"
              [class.grass]="pokeInfo.types[0].type.name === 'grass'"
            >
              {{ pokeInfo.types[0].type.name }}
            </li>
            @if (pokeInfo.types[1]) {
            <li
              class="poke-type"
              [class.poison]="pokeInfo.types[1].type.name === 'poison'"
            >
              {{ pokeInfo.types[1].type.name }}
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

  chooseType() {}
}
