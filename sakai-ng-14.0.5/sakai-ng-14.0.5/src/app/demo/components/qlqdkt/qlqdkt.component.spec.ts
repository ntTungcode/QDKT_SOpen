import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlqdktComponent } from './qlqdkt.component';

describe('QlqdktComponent', () => {
  let component: QlqdktComponent;
  let fixture: ComponentFixture<QlqdktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlqdktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QlqdktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
