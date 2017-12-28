import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBlocksComponent } from './nav-blocks.component';

describe('NavBlocksComponent', () => {
  let component: NavBlocksComponent;
  let fixture: ComponentFixture<NavBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
