import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  listItem:any;

  constructor() { }
  
  // Create id random format (Exp: CS342)
  generateCodeRandom(prefix: string, listItem: any, fieldCheck: string, l: number): string {
    let randomNumber: number;
    let re = new RegExp(prefix,"gi");

    let end: string = '9';
    end = this.addZero(end, l, 'after');

    randomNumber = Math.floor(Math.random() * Number(end));
    for(let i = 0;i < listItem.length; i++) {
      if(randomNumber === Number(listItem[i][fieldCheck].replace(re, ''))) {
        randomNumber = Math.floor(Math.random() * Number(end));
      }
    }
    return prefix + randomNumber;
  }
  // Create id sequential format (Exp: CS001, CS002)
  generateCodeSequential(prefix: string, listItem: any,
    fieldCheck: string, l: number): string {
    
    let maxNumber: number = 0;
    let re = new RegExp(prefix,"gi");
    let codeNumber: string;
    for(let i = 0;i < listItem.length; i++) {
      if(maxNumber < Number(listItem[i][fieldCheck].replace(re, ''))) {
        maxNumber = Number(listItem[i][fieldCheck].replace(re, ''));
      }
    }
    codeNumber = (maxNumber + 1).toString();
    codeNumber = this.addZero(codeNumber, l, 'pre');

    let code = prefix + codeNumber;
    return code;
  }

  addZero(codeNumber: string, l: number, choice: string): string {
    while(codeNumber.length < l) {
      if(choice === 'pre') {
        codeNumber = '0' + codeNumber;
      } else {
        codeNumber = codeNumber + '0' ;
      }
    }
    return codeNumber;
  }
}
