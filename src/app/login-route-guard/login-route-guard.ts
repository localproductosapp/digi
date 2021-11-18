import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable()
export class LoginRouteLogged implements CanActivate {

    constructor(
        private navCtrl: NavController
    ) { }

    canActivate() {
        //Validamos que existe un usuario en el localstorage almacenado
        let notification = localStorage.getItem('notification');
        if (notification) {
            console.log('entro en que tiene notificacion')
            return true;
        } else {
            console.log('entro en que no tiene notificacion')
                this.navCtrl.navigateRoot('/permission');
                return false;
           
            
        }
    }
}