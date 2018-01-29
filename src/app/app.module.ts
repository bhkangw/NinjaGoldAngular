import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { ActionComponent } from './action/action.component';
import { LogComponent } from './log/log.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
