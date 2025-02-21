import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrebodaComponent } from './preboda.component';

describe('PrebodaComponent', () => {
  let component: PrebodaComponent;
  let fixture: ComponentFixture<PrebodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrebodaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrebodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
