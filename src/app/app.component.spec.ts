import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { BlockTreeComponent } from './blockTree/blockTree.component';
import { SetupComponent } from './setup/setup.component';
import { ExplorerService } from './explorer/explorer.service';
import { BlockTreeService } from './blockTree/blockTree.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule, MatCardModule, MatButtonModule } from '@angular/material';

import 'codemirror'
import { CodemirrorModule } from 'ng2-codemirror';

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
      providers: [ExplorerService, BlockTreeService],
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
