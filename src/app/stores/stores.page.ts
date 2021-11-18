import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { LocalNotificationActionType } from '@capacitor/core';
import { NavParams,LoadingController,NavController, AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { take } from 'rxjs/operators';

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as mapboxgl from 'mapbox-gl';
import { environment } from './../../environments/environment';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;


@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  @ViewChild('asGeoCoder',{static:false}) asGeoCoder: ElementRef;
  stores
  spinner=false
  tabs=1
  geojson
  elID
  arregloMapa=[]
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  // 40.4274167120557, -3.70152025260364
  lat2 = 41.3879;
  lng2 = 2.16992;
  zoom = 6;
  
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.mapbox.accessToken = 'pk.eyJ1IjoibWVucGhpc2oyMyIsImEiOiJja2tjejVwcG0wNjNvMnVxYnB2NHh2cGE0In0.sz-4ABwLtuP1M__ceyARbg'; 
  //   const geocoder = new MapboxGeocoder({
  //     accessToken: mapboxgl.accessToken,
  //     mapboxgl: mapboxgl
  // });



   }

  

  ngOnInit() {
    this.getStores()
    
this.getCurrentPosition()
this.buildMap();
  
  }

  getStores(){
    this.spinner=true
    this.service.stores()
        .then(res => {
          this.spinner=false
          console.log(res);
          this.stores = res;
          this.picarLocation()
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


    buildMap(lng=null, lat=null): Promise<any> {
      /**
       * TODO: Aqui construimos el mapa
       */
      return new Promise((resolve, reject) => {
        try {
          if(lng != null && lat !=null){
            this.lng2 = lng
            this.lat2 = lat
          }
          this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
       
            zoom: this.zoom,

             center: [this.lng2, this.lat2]
            
            // center: [-96, 37.8]
          });
            // On map load
          this.map.on('load', (event) => {
            this.map.resize();
          });
  
          // var Draw = new MapboxDraw();
  
  // Map#addControl takes an optional second argument to set the position of the control.
  // If no position is specified the control defaults to `top-right`. See the docs
  // for more details: https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol
  
        // this.map.addControl(Draw, 'top-left');
  
  
  
   
          // this.map.addControl(new mapboxgl.NavigationControl())
  
          /**
           *  TODO: Aqui construimos el input buscador de direcciones
           */
          const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            language: 'es-Es',
            placeholder:"Buscar",
            mapboxgl
          });
          
          // *************
          // geocoder.on('result', ($event) => {
          //   const {result} = $event;
          //   // geocoder.clear();
          //   // console.log('*********', result)
          //   this.cbAddress.emit(result);
          // })
  
          resolve({
            map: this.map,
            geocoder
          });
  
        } catch (e) {
          reject(e);
        }
      });
    }
  

  
    
  
    // updateArea= (e: any) => {
    //   //  console.log('entramos',e.features[0].geometry.coordinates)
  
    //    this.resultadoCoordenadas.emit(e.features[0].geometry.coordinates);
  
    
    // }
  
  
    buildMarker(lng,lat, name,id){

      // console.log('este es el mapa',this.map)
     this.elID=id
      var marker = new mapboxgl.Marker()

      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup().setHTML(name))
      .addTo(this.map);
      marker.getElement().addEventListener('click',  (e) => {
        id
        this.navCtrl.navigateRoot(['/detail/',id]);
        // console.log('este es el id',id)
      });
      // marker.togglePopup();
      this.map.addLayer({
        id: 'tiendas',
          type: 'circle',
          source: 'tiendas',
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering
      })
  
      //  this.map.setCenter([this.lng2, this.lat2]);
    }
  
    buildMarker2(geojson){
      // var marker = new mapboxgl.Marker()
      
      // .setGeoJSON(geojson)
      // // .setLngLat([lng, lat])
      // // .setPopup(new mapboxgl.Popup().setHTML(name))
      //  .addTo(this.map);
      // this.map.on('load', () => {
      //   this.map.addSource('tiendas', {
      //   'type': 'geojson',
      //   'data': geojson
      //   });
      //   this.map.addLayer({
      //   'id': 'tiendas',
      //   'type': 'circle',
      //   'source': 'tiendas',
      //   'layout': {
      //     // Make the layer visible by default.
      //     'visibility': 'visible'
      //     },
      //     'paint': {
      //     'circle-radius': 8,
      //     'circle-color': 'rgba(55,148,179,1)'
      //     },
   
    
      //   });
      //   });

      //  this.map.on('load', () => {
        // Add an image to use as a custom marker

        //  console.log('entramos a ver el primer',this.geojson)
        //  console.log('entramos a ver el segundo',geojson)
    
        this.map.loadImage(
          'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
        if (error) throw error;
        this.map.addImage('custom-marker', image);
        // Add a GeoJSON source with 2 points
        this.map.addSource('points', {
        'type': 'geojson',
        'data': geojson,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering 
        });
         
        // Add a symbol layer
        // this.map.addLayer({
        // 'id': 'points',
        // 'type': 'symbol',
        // 'source': 'points',
        // 'layout': {
        // 'icon-image': 'custom-marker',
        // // get the title name from the source's "title" property
        // 'text-field': ['get', 'title'],
        // 'text-font': [
        // 'Open Sans Semibold',
        // 'Arial Unicode MS Bold'
        // ],
        // 'text-offset': [0, 1.25],
        // 'text-anchor': 'top'
        // },
        // });
        this.map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'points',
          filter: ['has', 'point_count'],
          paint: {
          // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          'circle-color': [
          'step',
          ['get', 'point_count'],
          '#51bbd6',
          100,
          '#f1f075',
          750,
          '#f28cb1'
          ],
          'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          100,
          30,
          750,
          40
          ]
          }
          });
          this.map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'points',
            filter: ['has', 'point_count'],
            layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
            }
            });

            // inspect a cluster on click
          
   

            this.map.addLayer({
              id: 'unclustered-point',
              type: 'symbol',
              source: 'points',
              filter: ['!', ['has', 'point_count']],
                 layout: {
                  'icon-image': 'custom-marker',
                  // get the title name from the source's "title" property
                  'text-field': ['get', 'title'],
                  'text-font': [
                  'Open Sans Semibold',
                  'Arial Unicode MS Bold'
                  ],
                  'text-offset': [0, 1.25],
                  'text-anchor': 'top'
                  },
          
              });

              this.map.on('click', 'unclustered-point', (e) => {
                console.log('entramo',e.features[0].properties.id)

                this.navCtrl.navigateRoot(['/detail/',e.features[0].properties.id]);
                  // const features = this.map.queryRenderedFeatures(e.point, {
                  // layers: ['clusters']
                  // });
                  // const clusterId = features[0].properties.id;
                  // this.map.getSource('earthquakes').getClusterExpansionZoom(
                  // clusterId,
                  // (err, zoom) => {
                  // if (err) return;
                  
                  // this.map.easeTo({
                  // center: features[0].geometry.coordinates,
                  // zoom: zoom
                  // });
                  // }
                  // );
                });

                //  this.map.addLayer({
                //   'id': 'unclustered-point',
                //   'type': 'symbol',
                //   'source': 'points',
                //   'layout': {
                //   'icon-image': 'custom-marker',
                //   // get the title name from the source's "title" property
                //   'text-field': ['get', 'title'],
                //   'text-font': [
                //   'Open Sans Semibold',
                //   'Arial Unicode MS Bold'
                //   ],
                //   'text-offset': [0, 1.25],
                //   'text-anchor': 'top'
                //   },
                //   });

          // this.map.addLayer({
          //   id: 'unclustered-point',
          //   type: 'circle',
          //   source: 'points',
          //   filter: ['!', ['has', 'point_count']],
          //   paint: {
            
          //   'circle-radius': 4,
          //   'circle-stroke-width': 1,
          //   'circle-stroke-color': '#fff'
          //   }
          //   });
        }
        );
        // });
  
    }
 
  
    removeMap(){
      if(this.map){
        this.map.remove();
      }
      
    }


    picarLocation(){


      // myArr = str.split();
      var latlong

      this.stores.forEach((element,index) => {

          this.service.consultarApiGeolocalizacion(element.address.street_1).then(res => {

            // console.log('envio esto',element.address.street_1,'recibio esto',res);
            if(res && JSON.parse(JSON.stringify(res)).features){
              // console.log('estos son los puntos',JSON.parse(JSON.stringify(res)).features[0].geometry.coordinates)

              if(JSON.parse(JSON.stringify(res)).features.length > 0 && JSON.parse(JSON.stringify(res)).features[0].geometry.coordinates!=''){
                 console.log('este es el feature',JSON.parse(JSON.stringify(res)).features[0].geometry.coordinates)
                // latlong=JSON.parse(JSON.stringify(res)).features[0].geometry.coordinates.split(",");
                let latitud=JSON.parse(JSON.stringify(res)).features[0].geometry.coordinates[1]
                let longitud=JSON.parse(JSON.stringify(res)).features[0].geometry.coordinates[0]
                // console.log('latitude',latitud,longitud)
      
                if(latitud!='' && longitud!=''){
                  // console.log('aqui van',element.store_name)
                  // console.log('entramos al push')
                  //  this.buildMarker(longitud,latitud, element.store_name)

                    // this.buildMarker(longitud,latitud,element.store_name,element.id)
                  this.arregloMapa.push({type: 'Feature',geometry: {type: 'Point',coordinates: [longitud, latitud]},properties: {title: element.store_name,description: element.store_name,id:element.id}})
      
                }
      
               
      
              }
              
            }
            
        
          }, err => {
      
            console.log(err);
          });

  
     
       
          
      })

       this.geojson = {
        type: 'FeatureCollection',
        features: 
          this.arregloMapa
        
      };
      // if(this.arregloMapa.length>0){
      //   this.buildMarker2(this.geojson)
      // }
      // this.buildMarker2(this.geojson)

      console.log('este es el arreglo ',this.arregloMapa)

     

      // console.log('este es el arreglo ',this.arregloMapa)
  
    }

    async getCurrentPosition() {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current', coordinates);
    }  

    tableta(tipo){
      if(tipo=='productos'){
        this.tabs=1
      }else{
        this.tabs=0
        // this.buildMap()
         this.buildMarker2(this.geojson)
      }
    }


}


