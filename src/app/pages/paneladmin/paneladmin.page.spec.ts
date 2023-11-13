import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaneladminPage } from './paneladmin.page';

describe('PaneladminPage', () => {
  let component: PaneladminPage;
  let fixture: ComponentFixture<PaneladminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaneladminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
