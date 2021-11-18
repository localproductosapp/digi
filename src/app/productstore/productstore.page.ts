import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-productstore',
  templateUrl: './productstore.page.html',
  styleUrls: ['./productstore.page.scss'],
})
export class ProductstorePage implements OnInit {

  products
  spinner = false
  page= '1'
  numero =1
  params
  paramsSubcategoria
  paramsTotal
  paramsTotalSubcategoria
  subcategorias
  subcate=''
  parametroGRAL
  precioPorcentaje:any=''
  per_page = '50'
  total = 300

  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('este es el parametro',this.activatedRoute.snapshot.params.store)
    this.totalProducts()
    this.getProducts()
  
  }

  

  totalProducts(){
    if(this.activatedRoute.snapshot.params.category){
      this.paramsTotal={consumer_key:'ck_eaf2ab1aecd446c7b9402c109e184953652bb94d',consumer_secret:'cs_7d5d35a98d9804c857f797563e2dd37d7534cc25',status:'publish',category:this.activatedRoute.snapshot.params.category}
    }else{
      this.paramsTotal={consumer_key:'ck_eaf2ab1aecd446c7b9402c109e184953652bb94d',consumer_secret:'cs_7d5d35a98d9804c857f797563e2dd37d7534cc25',status:'publish',search:this.activatedRoute.snapshot.params.store}
    }
    this.service.totalProducts(this.paramsTotal)
        .then(res => {
          console.log('todos los productos',res);
          console.log(res);
          this.total = parseInt(res[2].total)+parseInt(res[3].total);
          console.log('total',this.total)
        }, err => {
         
          console.log(err);
        });
    }

  getProducts(){
    this.products=[]
    this.spinner=true
    if(this.activatedRoute.snapshot.params.category){
      this.params={status:'publish',category:this.activatedRoute.snapshot.params.category,per_page:this.per_page, page:'1'}
    }else{
      this.params = {status:'publish',per_page:this.per_page, page:'1'};
    }
    
    this.subcate=''


    // setTimeout(function(){ 
    this.service.productStore(this.activatedRoute.snapshot.params.store,this.params)
  
        .then(res => {
          console.log('aqui van todo los productos',this.params)
          let arrayTemporal =res
          arrayTemporal.forEach((element,index) => {

              // console.log('este es el elemento',element)
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

          this.spinner=false
          console.log(res);
         
          this.products = arrayTemporal;

          console.log('arreglo con posicion nueva', this.products)
        }, err => {
         this.spinner=false
          console.log(err);
        });

      // }, 3000);


    }


    doInfinite(event){
        // event.target.complete();
        if(this.products.length < this.total){
            
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


          this.service.productStore(this.route.snapshot.paramMap.get('store'),this.params)
          .then(res => {
            this.spinner=false
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

            this.products.push(this.products)
          }, err => {
          //  this.spinnerProduct=false
            console.log(err);
          });

     
    }
  }

    openMenu(){
      console.log('entro')
      this.menu.open('custom');
    }
  

}
