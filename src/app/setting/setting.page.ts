import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { AnalyticsService } from '../services/analytics.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  params
  spinner=false
  user
  userLogin
  Sesion=true
  ver=false
  password
  nombre
  correo
  totalArboles
  registro
  idUsuario
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
     private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
  }

  cerrarsession(){
   
    // const removeName = async () => {
    //   await Storage.remove({ key: 'name' });
    // };

    // const removeEmail = async () => {
    //   await Storage.remove({ key: 'email' });
    // };
    // const removeRegistro = async () => {
    //   await Storage.remove({ key: 'registro' });
    // };
    // const removeidUser = async () => {
    //   await Storage.remove({ key: 'idUser' });
    // };

    localStorage.removeItem('user')

   
    this.router.navigate(['/login']);

  }

}
