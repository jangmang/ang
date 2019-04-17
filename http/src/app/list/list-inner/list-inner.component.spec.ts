import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInnerComponent } from './list-inner.component';

describe('ListInnerComponent', () => {
  let component: ListInnerComponent;
  let fixture: ComponentFixture<ListInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
