import { TestBed } from '@angular/core/testing';

import { RenderUrlDemandService } from './render-url-demand.service';

describe('RenderUrlDemandService', () => {
  let service: RenderUrlDemandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderUrlDemandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
