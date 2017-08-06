import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StorageService} from "./am-storage/storage.service";

@NgModule({
    providers: [StorageService],
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [

    ]
})
export class StorageModule {
}
