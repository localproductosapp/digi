import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.page.html',
  styleUrls: ['./store-detail.page.scss'],
})
export class StoreDetailPage implements OnInit {
store
spinner=false
spinnerProduct=false
productSotre
page='1'
total=300
params
products
per_page='50'
numero=1
precioPorcentaje:any=''
slideOpts = {
  slidesPerView: 2,
  pagination: false,
  initialSlide: 0,
  speed: 400
};
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  
  ngOnInit() {
    this.getStore()
    this.productStore()
  }

  getStore(){
    this.spinner=true
    this.service.store(this.route.snapshot.paramMap.get('id'))
        .then(res => {
          this.spinner=false
          console.log('esta es  la store',res);
          this.store = res;
        }, err => {
         this.spinner=false
          console.log(err);
        });
    }

    openMenu(){
      console.log('entro')
      this.menu.open('custom');
    }
  
    gotopoliticas() {
      this.navCtrl.navigateForward('politicas');
    }

    productStore(){
      this.spinnerProduct=true
      this.service.productStore(this.route.snapshot.paramMap.get('id'),{status:'publish',per_page:this.per_page, page:this.page})
          .then(res => {
            this.spinnerProduct=false
            let arrayTemporal =res
            arrayTemporal.forEach((element,index) => {
  
                console.log('este es el elemento',element)
              this.precioPorcentaje=''
                if(element.regular_price !='' && element.sale_price){
                  let tot = (parseFloat(element.regular_price)-parseFloat(element.sale_price))/parseFloat(element.regular_price)
                  let tot2= Math.round(tot*100)
                  this.precioPorcentaje=tot2
                }else{
                  this.precioPorcentaje=''
                }
  
                arrayTemporal[index]['porcentaje']=this.precioPorcentaje
                  
              })

            console.log(res);
            this.productSotre = arrayTemporal;
          }, err => {
           this.spinnerProduct=false
            console.log(err);
          });
      }

      moreProduct(){
        
          // event.target.complete();
          if(this.productSotre.length < this.total){
            
            this.numero+=1
            let definitiva = this.numero.toString();
            this.page=definitiva;
            if(this.route.snapshot.paramMap.get('category')){
              this.params={status:'publish',category:this.route.snapshot.paramMap.get('category'),per_page:this.per_page, page:this.page}
            }else{
              this.params = {status:'publish',per_page:this.per_page, page:this.page};
            }
  
            // setTimeout(() => {
            //   this.service.products(this.params).then(
            //     (response: any) => {
            //       let d = JSON.parse(JSON.stringify(response)) 
            //       console.log('esta es la paginacion',this.params)
            //       console.log(d);
            //       d.forEach((element,index) => {
            //         this.products.push(element)
            //       });
                  
            //     },
            //     (error) => {
               
            //       console.log('error')
            //     });
            // }, 1000);


            this.service.productStore(this.route.snapshot.paramMap.get('id'),this.params)
            .then(res => {
              this.spinnerProduct=false
              let arrayTemporal =res

              console.log('esta es la respuesta de los mas productos',res)
              arrayTemporal.forEach((element,index) => {
    
                  console.log('este es el elemento nuevo',element)
                this.precioPorcentaje=''
                  if(element.regular_price !='' && element.sale_price){
                    let tot = (parseFloat(element.regular_price)-parseFloat(element.sale_price))/parseFloat(element.regular_price)
                    let tot2= Math.round(tot*100)
                    this.precioPorcentaje=tot2
                  }else{
                    this.precioPorcentaje=''
                  }
    
                  arrayTemporal[index]['porcentaje']=this.precioPorcentaje
                    
                })
  
              console.log(res);
              this.products = arrayTemporal;

              this.productSotre.push(this.products)
            }, err => {
            //  this.spinnerProduct=false
              console.log(err);
            });






          }
       
      
      }

    

}
