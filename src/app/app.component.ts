import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from './services/api.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  categories
  constructor(
    private  menu: MenuController,
    private service: ApiService,


  ) {

  }

  ngOnInit() {

  
// external required step
// register for push

// // Get FCM token instead the APN one returned by Capacitor
// FCM.getToken()
//   .then((r) => console.log(`Token ${r.token}`))
//   .catch((err) => console.log(err));

  }

 

  closeMenu(){
    this.menu.close();
  }


  // getCategories(){

  //   this.service.categories()
  //       .then(res => {
  //         console.log(res);
  //         this.categories = res;
       
  //       }, err => {
         
  //         console.log(err);
  //       });
  //   }
}
