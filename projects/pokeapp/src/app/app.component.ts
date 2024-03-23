import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/shared/header/header.component';
import { FooterComponent } from './features/shared/footer/footer.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <isdi-header />
    <main></main>
    <isdi-footer />

    <router-outlet />
  `,
  styles: `
  main {
    min-height: 100vh;
  }
  `,
})
export class AppComponent {
  title = 'pokeapp';
}
