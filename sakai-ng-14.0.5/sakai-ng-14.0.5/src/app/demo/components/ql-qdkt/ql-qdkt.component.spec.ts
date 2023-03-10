import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLQdktComponent } from './ql-qdkt.component';

describe('QLQdktComponent', () => {
  let component: QLQdktComponent;
  let fixture: ComponentFixture<QLQdktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLQdktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLQdktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
