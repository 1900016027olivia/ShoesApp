import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplikasiProdukComponent } from './aplikasi-produk/aplikasi-produk.component';

import { CoverComponent } from './cover/cover.component';
import { LoginComponent } from './login/login.component';
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
