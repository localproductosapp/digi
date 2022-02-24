import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginRouteLogged } from './login-route-guard/login-route-guard';
import { ApiService } from './services/api.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[ApiService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detailCurso/:id',
    loadChildren: () => import('./detail-cursos/detail-cursos.module').then( m => m.DetailCursosPageModule)
  },

  // {
  //   path: 'stores',
  //   loadChildren: () => import('./stores/stores.module').then( m => m.StoresPageModule)
  // },
  // {
  //   path: 'detail/:id',
  //   loadChildren: () => import('./store-detail/store-detail.module').then( m => m.StoreDetailPageModule)
  // },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  // },
  // {
  //   path: 'detailProduct/:id',
  //   loadChildren: () => import('./detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  // },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  // },
  // {
  //   path: 'wishlist',
  //   loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  // },
  {
    path: 'permission',
    loadChildren: () => import('./permission/permission.module').then( m => m.PermissionPageModule)
  },
  // {
  //   path: 'categories',
  //   loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  // },
  // {
  //   path: 'search',
  //   loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  // },
  // {
  //   path: 'productstore',
  //   loadChildren: () => import('./productstore/productstore.module').then( m => m.ProductstorePageModule)
  // },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./registeruser/registeruser.module').then( m => m.RegisteruserPageModule)
  },
  {
    path: 'cursos-mas-vistos',
    loadChildren: () => import('./cursos-mas-vistos/cursos-mas-vistos.module').then( m => m.CursosMasVistosPageModule)
  },
  {
    path: 'videos-guardado',
    loadChildren: () => import('./videos-guardado/videos-guardado.module').then( m => m.VideosGuardadoPageModule)
  },
  {
    path: 'foro',
    loadChildren: () => import('./foro/foro.module').then( m => m.ForoPageModule)
  },
  {
    path: 'home-categorias',
    loadChildren: () => import('./home-categorias/home-categorias.module').then( m => m.HomeCategoriasPageModule)
  },
  {
    path: 'terminoscondiciones',
    loadChildren: () => import('./terminoscondiciones/terminoscondiciones.module').then( m => m.TerminoscondicionesPageModule)
  },  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'pagomodal',
    loadChildren: () => import('./pagomodal/pagomodal.module').then( m => m.PagomodalPageModule)
  },
  {
    path: 'cursos-premiun',
    loadChildren: () => import('./cursos-premiun/cursos-premiun.module').then( m => m.CursosPremiunPageModule)
  },
  {
    path: 'detail-premiun',
    loadChildren: () => import('./detail-premiun/detail-premiun.module').then( m => m.DetailPremiunPageModule)
  },


  // {
  //   path: 'drawer',
  //   loadChildren: () => import('./drawer/drawer.module').then( m => m.DrawerPageModule)
  // },


  // {
  //   path: 'orders',
  //   loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  // },
  // {
  //   path: 'detailsaccount',
  //   loadChildren: () => import('./detailsaccount/detailsaccount.module').then( m => m.DetailsaccountPageModule)
  // },
  // {
  //   path: 'setting',
  //   loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  // },
  // {
  //   path: 'privacypolicy',
  //   loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  // },
  // {
  //   path: 'returnpolicy',
  //   loadChildren: () => import('./returnpolicy/returnpolicy.module').then( m => m.ReturnpolicyPageModule)
  // },
  // {
  //   path: 'shippingpolicy',
  //   loadChildren: () => import('./shippingpolicy/shippingpolicy.module').then( m => m.ShippingpolicyPageModule)
  // }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
