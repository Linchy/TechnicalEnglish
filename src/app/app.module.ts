import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { BlockTreeComponent } from './blockTree/blockTree.component';
import { SetupComponent } from './setup/setup.component';
import { ExplorerService } from './explorer/explorer.service';
import { BlockTreeService } from './blockTree/blockTree.service';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    ExplorerComponent,
    BlockTreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ExplorerService, BlockTreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
