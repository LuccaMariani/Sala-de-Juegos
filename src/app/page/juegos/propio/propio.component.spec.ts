import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropioComponent } from './propio.component';

describe('PropioComponent', () => {
  let component: PropioComponent;
  let fixture: ComponentFixture<PropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
