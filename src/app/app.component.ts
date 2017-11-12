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
    let key = 'some_key_5';
    this.logger.debug("Is item there?", this.storageService.exists(key));
    this.storageService.set(key, {name: 'Jack', surname: 'Dibbler'});
    this.logger.debug("Is item there now?", this.storageService.exists(key));
    this.logger.debug("And here it is:", this.storageService.get(key));

    this.storageService.remove(key);
    this.logger.debug("Should not be here anymore?", this.storageService.exists(key));

    this.storageService.set(key, "Hello World");
    this.logger.debug("Now it's a string", this.storageService.get(key));

    this.storageService.set(key, 12345);
    this.logger.debug("Now it's a number", this.storageService.get(key));
  }
}
