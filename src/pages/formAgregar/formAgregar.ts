import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  templateUrl: 'formAgregar.html'
})
export class FormAgregar {
  
  formulario:FormGroup;
  public datos:any={nombre:"",correo:"",fecha:"",usuario:"",contrasena:""};
  
  constructor(public navCtrl: NavController,public params:NavParams, public fb:FormBuilder) {
    this.formulario=this.fb.group({
        'id':['',[Validators.required]],
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