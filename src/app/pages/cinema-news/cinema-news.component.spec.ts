import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaNewsComponent } from './cinema-news.component';

describe('CinemaNewsComponent', () => {
  let component: CinemaNewsComponent;
  let fixture: ComponentFixture<CinemaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinemaNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
