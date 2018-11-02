import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchildComponent } from './achild.component';

describe('AchildComponent', () => {
  let component: AchildComponent;
  let fixture: ComponentFixture<AchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
