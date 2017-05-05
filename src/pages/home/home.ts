import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormEditar } from '../formEditar/formEditar';
import { FormAgregar } from '../formAgregar/formAgregar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }


  showMessage(){
    let alert = this.alertCtrl.create({
    title: 'Confirme',
    message: 'Desea ELIMINAR o EDITAR este elemento?',
    buttons: [
      {
        text: 'Eliminar',
        handler: () => {
          console.log('eliminado');//AQUI ES DONDE SE VA A PONER LO QUE HARA ESTA OPCION
        }
      },
      {
        text: 'Editar',
        handler: () => {
          this.navCtrl.push(FormEditar);//AQUI ES DONDE SE VA A PONER LO QUE HARA ESTA OPCION
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelado');//AQUI ES DONDE SE VA A PONER LO QUE HARA ESTA OPCION
        }
      }
    ]
  });
  alert.present();
  }

  changePage(){
    this.navCtrl.push(FormAgregar);
  }


}//class

