import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})



export class RegistroComponent implements OnInit{
registrado:boolean=false
msnbienvenida:string=""
nick:string=""
estado1:boolean=true
estado2:boolean=false
datoTexto:string=""

datoPaso:number = 1;
  @Output() valorEnviado = new EventEmitter();

 constructor() {

 
  }

  ngOnInit(): void {
  }


 registrarusuario(){
    this.registrado=true;
        this.estado2=true;
        this.estado1=false;
        this.valorEnviado.emit(this.datoPaso);
   this.datoTexto="bienvenido"
      
  }





}
