import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories
  spinner=false
  constructor(
    private  menu: MenuController,
    private service: ApiService,
  ) { }

  ngOnInit() {
    this.getCategories()
  }

  closeMenu(){
    this.menu.close();
  }


  getCategories(){
    this.spinner=true
    this.service.categories()
        .then(res => {
          this.spinner=false
          console.log(res);
          this.categories = res;
       
        }, err => {
         this.spinner=false
          console.log(err);
        });
    }

}
