import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  templateUrl: 'formEditar.html'
})
export class FormEditar {

  formulario:FormGroup;
  public datos:any={nombre:"",correo:"",fecha:"",usuario:"",contrasena:"",id:""};
  
  constructor(public navCtrl: NavController, public params:NavParams, public fb:FormBuilder) {
    this.formulario=this.fb.group({
        'nombre':['',[Validators.required, Validators.maxLength(50)]],
        'correo':['',[Validators.required, Validators.maxLength(255),Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
        'fecha':['',[Validators.required]],
        'contrasena':['',[Validators.required,Validators.maxLength(30),Validators.pattern('[a-z]+[~!@#$%^&*()_/]+')]],
        'usuario':['',[Validators.required, Validators.maxLength(30), Validators.pattern('[a-z0-9]+')]],
    });
  }

  goToHome(){
      this.navCtrl.push(HomePage);
  }
}