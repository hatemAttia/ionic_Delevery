import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./auth/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./auth/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'detail-resto',
    loadChildren: () => import('./restaurant/detail-resto/detail-resto.module').then( m => m.DetailRestoPageModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./user/basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./user/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'validate-order',
    loadChildren: () => import('./user/validate-order/validate-order.module').then( m => m.ValidateOrderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
