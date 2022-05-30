import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { AnalyticsService } from '../services/analytics.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  params
  spinner=false
  email
  code
  color
  codego
  userLogin
  Sesion=true
  ver=false
  password
  nombre
  mostrarCampos=false
  correo
  token
  registro
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
     private analyticsService: AnalyticsService,
     public toastController: ToastController,
     public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  openMenu(){
    console.log('entro')
    this.menu.open('custom');
  }



  resetpassword(){
    this.spinner=true
    console.log('aqui vamos ',this.email)
    this.service.recuperarPassword({email:this.email})
    .then(res => {
      this.spinner=false

      console.log('aqui entre en la respuesta del login',res)
   

      if(JSON.parse(JSON.stringify(res)).codigo==1){
        this.mostrarCampos=true
        this.presentToast(JSON.parse(JSON.stringify(res)).message)
     
      }else{
        this.presentToast(JSON.parse(JSON.stringify(res)).message)
      }

      
      // console.log('este es el status',JSON.parse(JSON.stringify(res)).data.status)
      // console.log('este es el status',JSON.parse(JSON.stringify(res)).message)
   
 
    }, err => {
      this.spinner=false
      console.log(err);
    });

  }


  changepassword(){
    this.spinner=true
    this.service.changePassword({email:this.email,password:this.password,code:this.codego})
    .then(res => {
      this.spinner=false
      console.log('este es la respuesta del cambio',res);

      if(JSON.parse(JSON.stringify(res)).codigo==1){
        this.presentToast(JSON.parse(JSON.stringify(res)).message)
        this.navCtrl.navigateRoot('/login');
      }else{
        this.presentToast(JSON.parse(JSON.stringify(res)).message)
      }
   
 
    }, err => {
      this.spinner=false
      console.log(err);
    });

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color:this.color
    });
    toast.present();
  }


}
