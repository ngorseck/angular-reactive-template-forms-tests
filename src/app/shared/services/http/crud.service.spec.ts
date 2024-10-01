import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
