import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/shared/header/header.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { MenuComponent } from './features/shared/menu/menu.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent],
  template: `
    <isdi-header />
    <main>
      <router-outlet />
    </main>
    <isdi-footer />
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
