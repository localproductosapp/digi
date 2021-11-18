import { NgModule } from '@angular/core';

import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      // {
      //   path: 'cart',
      //   loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
      // },
      // {
      //   path: 'profile',
      //   loadChildren: () => import('../stores/stores.module').then( m => m.StoresPageModule)
      // },
      {
        path: 'profile2',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      // {
      //   path: 'products/:category',
      //   loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
      // },
      {
        path: 'videosGuardado',
        loadChildren: () => import('../videos-guardado/videos-guardado.module').then( m => m.VideosGuardadoPageModule)
      },
      {
        path: 'foro',
        loadChildren: () => import('../foro/foro.module').then( m => m.ForoPageModule)
      },
      // {
      //   path: 'search/:query',
      //   loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
      // },
      // {
      //   path: 'productstore/:store',
      //   loadChildren: () => import('../productstore/productstore.module').then( m => m.ProductstorePageModule)
      // },
      // {
      //   path: 'forgotpassword',
      //   loadChildren: () => import('../forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
      // },
      // {
      //   path: 'register',
      //   loadChildren: () => import('../registeruser/registeruser.module').then( m => m.RegisteruserPageModule)
      // },
      // {
      //   path: 'orders/:usuario',
      //   loadChildren: () => import('../orders/orders.module').then( m => m.OrdersPageModule)
      // },
      {
        path: 'detailsaccount',
        loadChildren: () => import('../detailsaccount/detailsaccount.module').then( m => m.DetailsaccountPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule)
      },
      {
        path: 'privacypolicy',
        loadChildren: () => import('../privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
      },
      {
        path: 'terms',
        loadChildren: () => import('../terminoscondiciones/terminoscondiciones.module').then( m => m.TerminoscondicionesPageModule)
      },
      // {
      //   path: 'returnpolicy',
      //   loadChildren: () => import('../returnpolicy/returnpolicy.module').then( m => m.ReturnpolicyPageModule)
      // },
      // {
      //   path: 'shippingpolicy',
      //   loadChildren: () => import('../shippingpolicy/shippingpolicy.module').then( m => m.ShippingpolicyPageModule)
      // },
       {
          path: 'cursosMasVistos',
          loadChildren: () => import('../cursos-mas-vistos/cursos-mas-vistos.module').then( m => m.CursosMasVistosPageModule)
        },
        {
          path: 'detailCurso/:id',
          loadChildren: () => import('../detail-cursos/detail-cursos.module').then( m => m.DetailCursosPageModule)
        },
        {
          path: 'home-categorias/:id',
          loadChildren: () => import('../home-categorias/home-categorias.module').then( m => m.HomeCategoriasPageModule)
        },
        {
          path: 'tag/:tag',
          loadChildren: () => import('../home-categorias/home-categorias.module').then( m => m.HomeCategoriasPageModule)
        },

      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
