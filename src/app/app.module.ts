import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AmLoggerModule, LogConfig, LogLevel} from "@bi8/am-logger";
import {AmStorageModule} from "./modules/am-storage/am-storage.module";

const logConfig : LogConfig = {
  level: LogLevel.debug
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmLoggerModule,
    AmStorageModule
  ],
  providers: [{
    provide: 'LogConfig',
    useValue: logConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
