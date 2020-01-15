import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtoroiComponent } from './vtoroi.component';

describe('VtoroiComponent', () => {
  let component: VtoroiComponent;
  let fixture: ComponentFixture<VtoroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtoroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtoroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
