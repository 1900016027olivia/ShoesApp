import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplikasi-produk',
  templateUrl: './aplikasi-produk.component.html',
  styleUrls: ['./aplikasi-produk.component.scss']
})
export class AplikasiProdukComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mode:string='side';
 //LogOut
 logout()
 {
   let conf=confirm('Apakah anda ingin keluar dari aplikasi ini?');
   if (conf)
   {
     localStorage.removeItem('appToken');
     window.location.reload();
   }
 }
  menu=[
    {
      name:'Dashboard',
      icon:'dashboard',
      url:'/aplikasi-produk/tambah-produk',
    },

    {
      name:'Edit Image',
      icon:'camera_enchance',
      url:'/aplikasi-produk/detail-produk',
    },
    
    {
      group:'Menu Group',
      children:[
        {
          name:'Image Gallery',
          icon:'images',
          url:'/aplikasi-produk/gallery'
        }

      ]
    }
  ];
}

