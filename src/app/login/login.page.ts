import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { AnalyticsService } from '../services/analytics.service';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
const { Storage } = Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  params
  spinner=false
  user
  userLogin
  Sesion=true
  ver=false
  password
  nombre=''
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
    public toastController: ToastController,
     private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
 
  }

  ionViewWillEnter() {
    // this.navCtrl.navigateRoot('/login');
    let notification = localStorage.getItem('notification');
    if (notification) {
        console.log('entro en que tiene notificacion')
      
    } else {
        console.log('entro en que no tiene notificacion')
            this.navCtrl.navigateRoot('/permission');
            return;
       
        
    }
    if(localStorage.getItem('user')){
      this.Sesion=false
      this.ver=true
      let arreglo=localStorage.getItem('user')

      this.nombre=JSON.parse(arreglo).names
      // console.log('arreglo',JSON.parse(arreglo).names)
      //  console.log('nombres',this.nombre)
    }
   
  }


  openMenu(){
    console.log('entro')
    this.menu.open('custom');
  }

  login(){
    this.spinner=true
    // let userPassword='Basic ' + btoa( this.user + ':' + this.password )
    // this.params={Authorization:userPassword}

    // console.log('esto va en el param',this.params)
    this.service.login({email:this.user,password:this.password})
        .subscribe(res => {
          this.spinner=false
          console.log(res);
          this.userLogin = res;
          if(this.userLogin && this.userLogin.user){

            console.log('esta es la prueba',this.userLogin)

            localStorage.setItem("token", this.userLogin.access_token)
            // localStorage.setItem("email", this.userLogin.data.user_email)
            // localStorage.setItem("registro", this.userLogin.data.user_registered)
            localStorage.setItem("user", JSON.stringify(this.userLogin.user))
            // localStorage.setItem("password", this.password)
            // localStorage.setItem("idUser", this.userLogin.data.ID)
            this.navCtrl.navigateForward(['/tabs/home'])

            // this.setObject()
            //  this.getObject() 
      
            // this.Sesion=false
            // this.ver=true
            // loginCocart

            // this.service.loginCocart(this.user,this.password)
            // .then(res => {
           
            //   console.log('este es el login cocar',res);
            
            // }, err => {
         
            //   console.log(err);
            // });
          }else{
            this.presentToast('Error!')
            console.log('entro en el elese')
          }
        }, err => {
          this.spinner=false
          
          console.log(err);
        });
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

    console.log('aqui va el cart_hash',user2.name)


    this.nombre=user.name
    this.correo=user2.name
    this.registro=user3.name
    this.idUsuario=user4.name

    if(this.nombre!=''){
      this.Sesion=false
      this.ver=true

      let nn1 =Storage.get({ key: 'name' })
    let ee1 =Storage.get({ key: 'email' })
    let rr1 =Storage.get({ key: 'registro' })


      
    }

    // this.getOrders(this.idUsuario)
    
  }

  // getOrders(idusuario){
  //   //  let customer='17'
  //   console.log('este es el id que estoy recibiendo',idusuario)

  //   this.service.orders(idusuario)
  //   .then(res => {

  //     this.totalArboles=JSON.parse(JSON.stringify(res)).length
  //     console.log('esta es  la respuesta de  las ordenes',res)
     
  //   }, err => {
  //     this.spinner=false
  //     console.log(err);
  //   });
  // }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color:'danger'
    });
    toast.present();
  }

  

}
