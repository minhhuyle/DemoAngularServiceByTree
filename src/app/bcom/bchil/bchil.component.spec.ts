import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BchilComponent } from './bchil.component';

describe('BchilComponent', () => {
  let component: BchilComponent;
  let fixture: ComponentFixture<BchilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BchilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BchilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
