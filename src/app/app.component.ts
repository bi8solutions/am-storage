import {Component, OnInit} from '@angular/core';
import {Logger, LogService} from "@bi8/am-logger";
import {StorageService} from "./modules/am-storage/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  logger: Logger;

  constructor(private logService: LogService, private storageService: StorageService) {
    this.logger = logService.getLogger(this.constructor.name);
  }

  ngOnInit(): void {
    this.storageService.setItem("some_key", {name: 'Jack', surname: 'Dibbler'});
    this.logger.debug("Is item there?", this.storageService.exists("some_key"));
    this.logger.debug("AnAnd here it is:", this.storageService.getItem("some_key"));
  }
}
