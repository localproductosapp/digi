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
  selector: 'app-detailsaccount',
  templateUrl: './detailsaccount.page.html',
  styleUrls: ['./detailsaccount.page.scss'],
})
export class DetailsaccountPage implements OnInit {

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
  plan
  avatar
  AvatarImg
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
    if(localStorage.getItem('user')){
      this.Sesion=false
      this.ver=true
      let arreglo=localStorage.getItem('user')

      this.nombre=JSON.parse(arreglo).names
      this.plan=JSON.parse(arreglo).subscription_id
      this.avatar=JSON.parse(arreglo).avatar

      this.idUsuario=JSON.parse(arreglo).id
      // console.log('arreglo',JSON.parse(arreglo).names)
      //  console.log('nombres',this.nombre)
    }

      let nn1 =Storage.get({ key: 'name' })
    let ee1 =Storage.get({ key: 'email' })
    let rr1 =Storage.get({ key: 'registro' })

 this.getObject()


      
    // }
  }

  ionViewWillEnter() {
    this.consoltarUser()
  }

  openMenu(){
    console.log('entro')
    this.menu.open('custom');
  }



  async setObject() {

    


    Storage.set({
      key: 'name',
      value:
      JSON.stringify({
        name: this.userLogin.data.display_name
      })
    });
    Storage.set({
      key: 'email',
      value: 
      JSON.stringify({
        name: this.userLogin.data.user_email
      })
    });
    Storage.set({
      key: 'registro',
      value: 
      JSON.stringify({
        name: this.userLogin.data.user_registered
      })
    });
    Storage.set({
      key: 'usuario',
      value: 
      JSON.stringify({
        name: this.user
      })
    });
    Storage.set({
      key: 'password',
      value: 
      JSON.stringify({
        name: this.password
      })
    });
    Storage.set({
      key: 'idUser',
      value: 
      JSON.stringify({
        name: this.userLogin.data.ID
      })
    });

  }


  async getObject() {
    const ret = await Storage.get({ key: 'name' });
    const user = JSON.parse(ret.value);


    const ret2 = await Storage.get({ key: 'email' });
    const user2 = JSON.parse(ret2.value);


    const ret3 = await Storage.get({ key: 'registro' });
    const user3 = JSON.parse(ret3.value);

    
    const ret4 = await Storage.get({ key: 'idUser' });
    const user4 = JSON.parse(ret4.value);

    // console.log('aqui va el cart_hash',user2.name)


    this.nombre=user.name
    this.correo=user2.name
    this.registro=user3.name
    // this.idUsuario=user4.name

  
    
  }


  consoltarUser(){
    this.service.consultarUser(this.idUsuario)
    .then(res => {

 
      console.log('esta es la del usuario',res)
      this.AvatarImg=JSON.parse(JSON.stringify(res)).imgPerfil

    }, err => {


     
      console.log(err);
    });
  }



  

}
