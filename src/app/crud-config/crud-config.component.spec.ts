import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudConfigComponent } from './crud-config.component';

describe('CrudConfigComponent', () => {
  let component: CrudConfigComponent;
  let fixture: ComponentFixture<CrudConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudConfigComponent]
    });
    fixture = TestBed.createComponent(CrudConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
