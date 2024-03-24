import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'poke_list' },
  {
    path: 'poke_list',
    title: 'HOME',
    loadComponent: () => import('./features/poke-list/poke-list.component'),
  },
  {
    path: 'my_pokemon',
    title: 'MY POKEMON',
    loadComponent: () => import('./features/my-pokemon/my-pokemon.component'),
  },
  {
    path: 'poke_details/:id',
    title: 'POKEMONS DETAILS',
    loadComponent: () =>
      import('./features/poke-details/poke-details.component'),
  },
  { path: '**', redirectTo: 'poke_list' },
];
