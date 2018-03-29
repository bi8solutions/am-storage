import {Injectable, Inject} from '@angular/core';

import * as _ from 'lodash';
import {Logger, LogService} from "@bi8/am-logger";

interface Wrapper {
  value: any;
}

@Injectable()
export class StorageService {

  logger: Logger;

  constructor(private logService: LogService) {
    this.logger = logService.getLogger(this.constructor.name);
    this.logger.debug("Hello World");
  }

  remove(key: string){
    localStorage.removeItem(key);
  }

  exists(key) : boolean {
    let found = localStorage.getItem(key);
    return !_.isNil(found);
  }

  get(key: string, defaultValue?: any) : any {
    let found = localStorage.getItem(key);
    if (!_.isNil(found)){
      let wrapper : Wrapper = JSON.parse(found) as Wrapper;
      return wrapper && wrapper.value ? wrapper.value : defaultValue;
    } else {
      return defaultValue;
    }
  }

  set(key: string, value: any){
    let wrapper : Wrapper = { value: value };
    localStorage.setItem(key, JSON.stringify(wrapper));
  }
}
