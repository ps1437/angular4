import { Injectable } from '@angular/core';

@Injectable()
export class StringUtilService {

  constructor() { }
public capatilizeWord(word):string{
  return word.charAt(0).toUpperCase() + word.slice(1);
}
}
