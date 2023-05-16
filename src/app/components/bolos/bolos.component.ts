import { Component } from '@angular/core';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.component.html',
  styleUrls: ['./bolos.component.scss']
})
export class BolosComponent {
  bolosList = [
    {'name': 'bolo1', 'price': 300},
    {'name': 'bolo2', 'price': 500},
    {'name': 'bolo3', 'price': 600}
  ];
  
  total: number = 0;


  pedidoList:any[] = []


  excluirTudo(){
    this.pedidoList = [];
    this.total = 0;
  }

  adicionarBolo(boloEscolhido: any){
    console.log('Adicionando o objeto', boloEscolhido);
    this.total = this.total + boloEscolhido.price;
    console.log(this.total);
    this.pedidoList.push(boloEscolhido);
    
  }

  
}
