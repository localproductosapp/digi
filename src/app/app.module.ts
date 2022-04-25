import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { HttpConfigInterceptor } from './services/httpConfig.interceptor';
import { HTTP } from '@ionic-native/http/ngx';
import { LoginRouteLogged } from './login-route-guard/login-route-guard';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
// import { Stripe } from '@awesome-cordova-plugins/stripe/ngx';

// import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';





import { 
  HTTP_INTERCEPTORS, 
  HttpClientModule,
  HttpClient 
} from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },InAppBrowser,HTTP,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    LoginRouteLogged,
    FirebaseAnalytics,
    AndroidPermissions,
    StreamingMedia,
    // InAppPurchase2,
    // Stripe

    

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
