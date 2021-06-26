import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplikasiProdukComponent } from './aplikasi-produk/aplikasi-produk.component';
import { CorauselComponent } from './corausel/corausel.component';

import { CoverComponent } from './cover/cover.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path:'cover',
    component:CoverComponent
  },
  
  {
    path:'cover',
    component:AplikasiProdukComponent
  },

  {
    path: 'login',
    component:LoginComponent
  },

  
  {
    path: 'corausel',
    component:CorauselComponent
  },


  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'aplikasi-produk',
    loadChildren:()=>import('./aplikasi-produk/aplikasi-produk.module').then(mod=>mod.AplikasiProdukModule)
  },

  
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/cover'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
