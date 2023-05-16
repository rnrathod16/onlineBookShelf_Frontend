import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenbookComponent } from './openbook.component';

describe('OpenbookComponent', () => {
  let component: OpenbookComponent;
  let fixture: ComponentFixture<OpenbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenbookComponent]
    });
    fixture = TestBed.createComponent(OpenbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
