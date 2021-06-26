import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplikasiProdukComponent } from './aplikasi-produk.component';
import { MaterialDesign } from '../Material/material';
import { TambahProdukComponent } from './tambah-produk/tambah-produk.component';
import { DetailProdukComponent } from './detail-produk/detail-produk.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { IsidetailComponent } from './isidetail/isidetail.component';

const routes:Routes =[
  {
    path: '',
    component: AplikasiProdukComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'tambah-produk',
        component: TambahProdukComponent
      },

      {
        path: 'isidetailProduk',
        component: IsidetailComponent
      },
      {
        path:'detail-produk',
        component:DetailProdukComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    AplikasiProdukComponent,
    TambahProdukComponent,
    DetailProdukComponent,
    DashboardComponent,
    IsidetailComponent
  ],

  imports: [
    CommonModule,
    MaterialDesign,
    RouterModule.forChild(routes)
  ]
})
export class AplikasiProdukModule { }
