import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimTipComponent } from './claim-tip.component';

describe('ClaimTipComponent', () => {
  let component: ClaimTipComponent;
  let fixture: ComponentFixture<ClaimTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
