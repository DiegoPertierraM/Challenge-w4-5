import { TestBed } from '@angular/core/testing';

import { PokeapiRepoService } from './pokeapi.repo.service';

describe('PokeapiRepoService', () => {
  let service: PokeapiRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeapiRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
