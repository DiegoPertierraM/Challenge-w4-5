import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { routes } from '../../../app.routes';
import { MenuOption } from '../../../core/types/menu-option';

@Component({
  selector: 'isdi-header',
  standalone: true,
  template: `
    <header class="header" role="heading" aria-level="1">
      <h1 class="header__title">
        <a href="index.html"
          ><img src="../../../assets/pokemon-logo.svg" alt="Pokemon logo"
        /></a>
      </h1>
      <isdi-menu [items]="menuOptions" />
    </header>
  `,
  styleUrl: './header.component.css',
  imports: [MenuComponent],
})
export class HeaderComponent {
  menuOptions: MenuOption[] = [];
  constructor() {
    this.menuOptions = routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
