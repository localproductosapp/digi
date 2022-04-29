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
  Avatar
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
     private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
    let arreglo=localStorage.getItem('user')

    this.idUsuario=JSON.parse(arreglo).id
    // this.consoltarUser()
  }

  ionViewWillEnter() {
    this.consoltarUser()
  }

  cerrarsession(){
   
   

    localStorage.removeItem('user')

   
    this.router.navigate(['/login']);

  }

  cambiarPerfil(valor){

    console.log('este es el id de  usuario',this.idUsuario)
    console.log('este es el imgperfil',valor)

    this.service.updateImgPerfil({id:this.idUsuario,imgPerfil:valor})
    .subscribe(res => {

 
      console.log('esta es la respuesta',res)

      this.consoltarUser()

    }, err => {


     
      console.log(err);
    });

  }

  consoltarUser(){
    this.service.consultarUser(this.idUsuario)
    .subscribe(res => {

 
      console.log('esta es la del usuario',res)
      this.Avatar=JSON.parse(JSON.stringify(res)).imgPerfil

    }, err => {


     
      console.log(err);
    });
  }

  // updateImgPerfil

}
