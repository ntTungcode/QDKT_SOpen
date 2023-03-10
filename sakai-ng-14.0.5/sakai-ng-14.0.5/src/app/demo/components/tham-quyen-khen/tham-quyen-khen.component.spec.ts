import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThamQuyenKhenComponent } from './tham-quyen-khen.component';

describe('ThamQuyenKhenComponent', () => {
  let component: ThamQuyenKhenComponent;
  let fixture: ComponentFixture<ThamQuyenKhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThamQuyenKhenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThamQuyenKhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
