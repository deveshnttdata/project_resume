import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCodeShopComponent } from './home-code-shop.component';

describe('HomeCodeShopComponent', () => {
  let component: HomeCodeShopComponent;
  let fixture: ComponentFixture<HomeCodeShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCodeShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCodeShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
