import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StorageService} from "./storage.service";

@NgModule({
  providers: [StorageService],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AmStorageModule { }
