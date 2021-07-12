import { Component, OnInit } from '@angular/core';
import {
  DividirService,
  MultiplicarService,
  SomarService,
  SubtrairService,
} from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private resultado!: number;
  constructor(
    private somarService: SomarService,
    private dividirService: DividirService,
    private multiplicarService: MultiplicarService,
    private subtrairService: SubtrairService
  ) {}

  ngOnInit(): void {}

  soma(n1: string, n2: string): void {
    let num1: number = parseFloat(n1);
    let num2: number = parseFloat(n2);
    this.resultado = this.somarService.somar(num1, num2);
  }

  subtracao(n1: string, n2: string): void {
    let num1: number = parseFloat(n1);
    let num2: number = parseFloat(n2);
    this.resultado = this.subtrairService.subtrair(num1, num2);
  }
  multiplicacao(n1: string, n2: string): void {
    let num1: number = parseFloat(n1);
    let num2: number = parseFloat(n2);
    this.resultado = this.multiplicarService.multiplicar(num1, num2);
  }
  divisao(n1: string, n2: string): void {
    let num1: number = parseFloat(n1);
    let num2: number = parseFloat(n2);
    this.resultado = this.dividirService.dividir(num1, num2);
  }

  get resultadoValor() {
    return this.resultado.toString();
  }
}
