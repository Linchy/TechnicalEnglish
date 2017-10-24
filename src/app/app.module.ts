import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatGridListModule, MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { BlockTreeComponent } from './blockTree/blockTree.component';
import { SetupComponent } from './setup/setup.component';
import { ExplorerService } from './explorer/explorer.service';
import { BlockTreeService } from './blockTree/blockTree.service';

import { CodemirrorModule } from 'ng2-codemirror';
import "codemirror/mode/clojure/clojure"

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    ExplorerComponent,
    BlockTreeComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    MatGridListModule, MatCardModule, MatButtonModule,
    CodemirrorModule
  ],
  providers: [
    ExplorerService, 
    BlockTreeService],
  bootstrap: [
    AppComponent]
})
export class AppModule { }