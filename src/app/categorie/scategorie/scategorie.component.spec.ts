import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScategorieComponent } from './scategorie.component';

describe('ScategorieComponent', () => {
  let component: ScategorieComponent;
  let fixture: ComponentFixture<ScategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScategorieComponent]
    });
    fixture = TestBed.createComponent(ScategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
