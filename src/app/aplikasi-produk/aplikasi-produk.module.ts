import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplikasiProdukComponent } from './aplikasi-produk.component';
import { MaterialDesign } from '../Material/material';
import { TambahProdukComponent } from './tambah-produk/tambah-produk.component';
import { DetailProdukComponent } from './detail-produk/detail-produk.component';



@NgModule({
  declarations: [
    AplikasiProdukComponent,
    TambahProdukComponent,
    DetailProdukComponent
  ],

  entryComponents:[
    TambahProdukComponent,
    DetailProdukComponent,
  ],

  imports: [
    CommonModule,
    MaterialDesign
  ]
})
export class AplikasiProdukModule { }
