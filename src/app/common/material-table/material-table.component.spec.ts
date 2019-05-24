import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableComponent } from './material-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MaterialTableComponent', () => {
  let component: MaterialTableComponent;
  let fixture: ComponentFixture<MaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MaterialTableComponent,
      ],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        BrowserAnimationsModule
      ]
      // schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
