import { Component } from '@angular/core';

@Component({
  selector: 'isdi-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <address class="footer__text">{{ address }}</address>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  address = '2024 Poke App - Diego Pertierra';
}
