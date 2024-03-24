import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from '../../../core/types/menu-option';

@Component({
  selector: 'isdi-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of items; track $index) {
        <li>
          @if (item.path !== 'poke_details/:id') {
          <a [routerLink]="item.path" routerLinkActive="active">{{
            item.title
          }}</a>
          }
        </li>
        }
      </ul>
    </nav>
  `,
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input({
    required: true,
  })
  items: MenuOption[] = [];
}
