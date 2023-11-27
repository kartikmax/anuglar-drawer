import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpParentComponent } from './help-parent.component';

describe('HelpParentComponent', () => {
  let component: HelpParentComponent;
  let fixture: ComponentFixture<HelpParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpParentComponent]
    });
    fixture = TestBed.createComponent(HelpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
