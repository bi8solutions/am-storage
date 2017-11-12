import {Injectable, Inject} from '@angular/core';

import * as _ from 'lodash';

interface Wrapper {
  value: any;
}

@Injectable()
export class StorageService {

  constructor() {
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
    return !_.isNil(found) ? (JSON.parse(found) as Wrapper).value : defaultValue;
  }

  set(key: string, value: any){
    let wrapper : Wrapper = { value: value };
    localStorage.setItem(key, JSON.stringify(wrapper));
  }
}