import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BezkostilyanikakComponent } from './bezkostilyanikak.component';

describe('BezkostilyanikakComponent', () => {
  let component: BezkostilyanikakComponent;
  let fixture: ComponentFixture<BezkostilyanikakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BezkostilyanikakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BezkostilyanikakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
