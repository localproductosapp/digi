import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import categoryData from '../../assets/mockdata/categories.json';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  categories ;

  constructor(private modalCtrl: ModalController,private apiService:ApiService) { }
 
  ngOnInit() {
    this.categorias()
  }
 
  dismiss() {
    this.modalCtrl.dismiss();
  }

  categorias(){

    this.apiService.categories()
    .then(res => {
      // this.cateSpinner=false
      
      this.categories = JSON.parse(JSON.stringify(res)).data;
      console.log('cat menu',this.categories );
   
    }, err => {
    //  this.cateSpinner=false
      console.log(err);
    });

  }

}
