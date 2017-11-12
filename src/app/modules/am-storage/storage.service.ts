import {Injectable, Inject} from '@angular/core';

import * as _ from 'lodash';

@Injectable()
export class StorageService {

  constructor() {
  }

  remove(key: string){
    localStorage.removeItem(key);
  }

  exists(key) : boolean {
    let found = localStorage.getItem(key);
    return found != undefined && found != null;
  }

  getItem(key: string, defaultValue?: any) : any {
    let item = localStorage.getItem(key);
    let result = item ? JSON.parse(item) : defaultValue;
    return result;
  }

  setItem(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getString(key: string, defaultValue?: string) : string {
    return localStorage.getItem(key) || defaultValue;
  }

  setString(key, value: string){
    localStorage.setItem(key, value);
  }
}
