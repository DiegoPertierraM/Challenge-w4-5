import { Component } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header" role="heading" aria-level="1">
      <h1 class="header__title">
        <a href="index.html"
          ><img src="../../../assets/pokemon-logo.svg" alt="Pokemon logo"
        /></a>
      </h1>
    </header>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
