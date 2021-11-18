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
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {

  params
  spinner=false
  email
  username
  color
  userLogin
  Sesion=true
  ver=false
  password
  nombre
  mostrarCampos=false
  correo
  registro
  names
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


  register(){
    this.spinner=true
    this.service.registerUser({"email":this.email,"names":this.names,"password":this.password})
    .then(res => {
      this.spinner=false
      console.log('este es la respuesta',res);
      // console.log('este es el status',JSON.parse(JSON.stringify(res)).data.status)
      // console.log('este es el status',JSON.parse(JSON.stringify(res)).message)
   
      

      if(JSON.parse(JSON.stringify(res)).data){
      
        this.color='success'
        this.presentToast(JSON.parse(JSON.stringify(res)).message)
        this.navCtrl.navigateRoot('/');
      }else{
       
        this.color='danger'
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
