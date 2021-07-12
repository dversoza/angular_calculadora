import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SomarService {
  constructor() {}

  somar(num1: number, num2: number): number {
    return num1 + num2;
  }
}
