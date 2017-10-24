import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { BlockTreeComponent } from './blockTree/blockTree.component';
import { SetupComponent } from './setup/setup.component';
import { BlockTreeService } from './blockTree/blockTree.service';
import { ExplorerService } from './explorer/explorer.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule, MatCardModule, MatButtonModule } from '@angular/material';

import 'codemirror'
import { CodemirrorModule } from 'ng2-codemirror';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SetupComponent,
        ExplorerComponent,
        BlockTreeComponent
      ],
      imports: [
        BrowserModule,
        MatGridListModule, MatCardModule, MatButtonModule,
        CodemirrorModule
      ],
      providers: [
        ExplorerService, BlockTreeService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
