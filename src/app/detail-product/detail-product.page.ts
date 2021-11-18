import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;



@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
product
valueAttribute
arreglo:any=[]
atributos=new Map()
productVariations
spinner=false
params
Saberusuario=''
in_stock
datosVariacion:any=[]
outStock=false
addProduct
arrayNumber
Cartkey
Carthash
nombre
correo
arreglito:any=[]
registro
Pruebaa=[]
idVariacion
arreglogral:any={}
slideOpts = {
  initialSlide: 1,
  speed: 400
};
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,

    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.getProduct()
    this.getObject()
    this.obtenerLocal()

    
  }

  async obtenerLocal(){
    const ret = await Storage.get({ key: 'wishlist' });
    const user = JSON.parse(ret.value);
   
    if(user===null ||user===''){
      console.log('esta vacio esto')
    }else{
      this.arreglito=user.name
    }
  }

  getProduct(){

    this.service.product(this.route.snapshot.paramMap.get('id'))
        .then(res => {
          console.log(res);
          this.product = res;
          if(this.product.in_stock==true){
            this.outStock=false
          }else{
            this.outStock=true
          }

     
          if(JSON.parse(JSON.stringify(this.product)).type=='variable'){

            this.getVariations()
        
            JSON.parse(JSON.stringify(this.product)).attributes.forEach(element => {

              console.log('nombre del attributo',element.name)
            if(this.Pruebaa.includes( element.name)){
              console.log('ya existe en el arreglo')
            }else{
              this.Pruebaa.push(element.name)
            }
            
              
            });
            this.arrayNumber=this.Pruebaa.length
console.log('este es el total del numero',this.arrayNumber)
            // this.arrayNumber=JSON.parse(JSON.stringify(this.product)).attributes.length

          }


        }, err => {
         
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

    async addCartWish(product){


      this.arreglito.push(product)
console.log('asi va el arreglo cuando agrego a  la lista',this.arreglito)
      await Storage.set({
        key: 'wishlist',
        value:
        JSON.stringify({
          name: this.arreglito
        })
      }
      );
      this.presentToast2()
    }

    addCart(idProduct){
      if(this.outStock){
        this.presentToastAgotado()
        return
      }
      console.log('entro en el agregar carrito',this.arreglogral)
      this.spinner=true
      let id=idProduct
      let Totalid=id.toString()
      if(this.Saberusuario!=''){
        // console.log('entro donde  hay cart_key')

        // if(this.nombre!=''){
          // let userPassword='Basic ' + btoa( localStorage.getItem("usuario") + ':' + localStorage.getItem("password") )
          if(JSON.parse(JSON.stringify(this.product)).type=='variable'){
            let idProducts=Totalid
            this.params={id:this.idVariacion.toString(),quantity:"1"}
          }else{
            let idProducts=Totalid
            this.params={id:idProducts,quantity:"1"}
          }
        // }else{
        //   if(JSON.parse(JSON.stringify(this.product)).type=='variable'){
        //     let idProducts=Totalid
        //     this.params={id:this.idVariacion.toString(),quantity:"1",cart_key:this.Saberusuario}
        //   }else{
        //     let idProducts=Totalid
        //     this.params={id:idProducts,quantity:"1",cart_key:this.Saberusuario}
        //   }
        // }

      }else{
        console.log('entro donde no hay cart_key')
        // if(this.nombre!=''){
        //   let userPassword='Basic ' + btoa( localStorage.getItem("usuario") + ':' + localStorage.getItem("password") )
          if(JSON.parse(JSON.stringify(this.product)).type=='variable'){
            let idProducts=Totalid
            console.log('aqui esta antes de llenar el param dentro de  no key cart',this.arreglogral)
            this.params={id:this.idVariacion.toString(),quantity:"1"}
            console.log('es producto variable y no hay cart_key',this.params)
          }else{
            let idProducts=Totalid
            this.params={id:idProducts,quantity:"1"}
          }
        // }else{
        //   if(JSON.parse(JSON.stringify(this.product)).type=='variable'){
        //     let idProducts=Totalid
        //     console.log('aqui esta antes de llenar el param dentro de  no key cart',this.arreglogral)
        //     this.params={id:this.idVariacion.toString(),quantity:"1"}
        //     console.log('es producto variable y no hay cart_key',this.params)
        //   }else{
        //     let idProducts=Totalid
        //     this.params={id:idProducts,quantity:"1"}
        //   }
        // }
      }
      //cart_key
      //localStorage.setItem("free_access_id", shopping_cart.free_access_id)
      console.log('antes de entrar al servicio',this.params)
   if(JSON.parse(JSON.stringify(this.product)).type=='variable'){
    if(this.in_stock==false){
      this.spinner=false
      this.presentToastAgotado()
      return
    }
   }
      this.service.addCart(this.params)
      
        .then(res => {
   
    this.getObject()

          console.log('nuevo proceso',res);
  
          this.spinner=false
          console.log(JSON.parse(JSON.stringify(res)).cart_key);
          this.presentToast() 

          console.log('existe en el localstorage',this.Saberusuario)
          if(this.Saberusuario =='' || this.Saberusuario===null){
            
            this.Cartkey=JSON.parse(JSON.stringify(res)).cart_key
            this.Carthash=JSON.parse(JSON.stringify(res)).cart_hash
            this.setObject(this.Cartkey,this.Carthash) 
          }else{
            console.log('have')
             
       
            // localStorage.setItem("cart_key", res.cart_key)
            // localStorage.setItem("cart_hash", res.cart_hash)
          }
          this.addProduct = res;
        }, err => {
         this.spinner=false
          console.log(err);
        });

    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Producto agregado al carrito',
        duration: 2000
      });
      toast.present();
    }
    async presentToast2() {
      const toast = await this.toastController.create({
        message: 'Producto agregado a los deseos',
        duration: 2000
      });
      toast.present();
    }

    async presentToastAgotado() {
      const toast = await this.toastController.create({
        message: 'No hay stock de este producto',
        duration: 2000
      });
      toast.present();
    }

    async setObject(cartkey,carthash) {
      await Storage.set({
        key: 'cart_key',
        value:
        JSON.stringify({
          name: cartkey
        })
      }
      );
      await Storage.set({
        key: 'cart_hash',
        value:
        JSON.stringify({
          name: carthash
      })
      });
    }


 


    
  async getObject() {
    const ret = await Storage.get({ key: 'cart_key' });
    const user = JSON.parse(ret.value);

    console.log('esto es l oque esta en ret',ret)

    if(user===null){
      console.log('esta nulo')
      this.Saberusuario='';
    }else{
      this.Saberusuario=user.name;
    }


// if()
//     const ret1 = await Storage.get({ key: 'name' });
//     const user1 = JSON.parse(ret1.value);


//     const ret2 = await Storage.get({ key: 'email' });
//     const user2 = JSON.parse(ret2.value);


//     const ret3 = await Storage.get({ key: 'registro' });
//     const user3 = JSON.parse(ret3.value);

//     this.nombre=user.name
//     this.correo=user2.name
//     this.registro=user3.name
    

   

    
  }

    getVariations(){
      this.service.getproductVariations(this.route.snapshot.paramMap.get('id'))
      .then(res => {
        
        console.log('variaciones',res);
        this.productVariations = res;
      }, err => {
       
        console.log(err);
      });
    }

    getAttribute(attribute,evemt){
this.valueAttribute=evemt.detail.value
      let att="attribute_"+attribute.toLowerCase()
   
      console.log(att)
      this.arreglogral[att]=this.valueAttribute
      this.arreglo={attibute:attribute,value:this.valueAttribute}
  

      // if(!this.atributos.indexOf( attribute)){
        
        this.atributos.set(attribute,this.valueAttribute);
      // }else{
      //   this.atributos=this.atributos
      //   console.log('existe')
      // }

      console.log(this.atributos)

      let totalCount=this.atributos.size
    
      if(totalCount==this.arrayNumber){

        this.productVariations.forEach((elementGeneralVariation,index) => {

          let coincide=0

          elementGeneralVariation.attributes.forEach((elementVariation,index) => {

            // this.atributos.forEach((elementSelect,index) => {

            //   if(elementSelect.attibute==elementVariation.name && elementSelect.value==elementVariation.option){
            //     console.log(elementGeneralVariation.id)
                
            //   }

              let opcionArrayMap=this.atributos.get(elementVariation.name)

         

              if(opcionArrayMap==elementVariation.option){
              
                coincide=coincide+1
              }

             
            // });
          
          });
   
          if(coincide==totalCount){

            console.log('este es el elemento variation',elementGeneralVariation)
         
            if(this.datosVariacion.length==0){
              this.idVariacion=elementGeneralVariation.id
              this.datosVariacion={id:elementGeneralVariation.id,price:elementGeneralVariation.price}
              this.in_stock=elementGeneralVariation.in_stock
            }
          }
        });

        console.log('arreglo definitivo',this.datosVariacion)
      }

   console.log('arreglogral',this.arreglogral)
    }


}
