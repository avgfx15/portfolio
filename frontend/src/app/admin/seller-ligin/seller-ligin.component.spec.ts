import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLiginComponent } from './seller-ligin.component';

describe('SellerLiginComponent', () => {
  let component: SellerLiginComponent;
  let fixture: ComponentFixture<SellerLiginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLiginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerLiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
