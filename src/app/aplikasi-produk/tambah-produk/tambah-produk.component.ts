import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailProdukComponent } from '../detail-produk/detail-produk.component';
import { IsidetailComponent } from '../isidetail/isidetail.component';

@Component({
  selector: 'app-tambah-produk',
  templateUrl: './tambah-produk.component.html',
  styleUrls: ['./tambah-produk.component.scss']
})
export class TambahProdukComponent implements OnInit {
  title:any;
  shoesapp:any={};
  shoesapps:any=[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  //Membuat fungsi loading:
 loading!: boolean;

 //Membuat Fungsi Buat Produk
 buatProduk(data: any,idx: number) 
 {
  let dialog=  this.dialog.open(DetailProdukComponent, {
     width: '450px',
     data:data
   });

   dialog.afterClosed().subscribe(res=>{
    if(res)
    {
      //jika idx=-1 (penambahan data baru) maka tambahkan data
      if(idx==-1)this.shoesapps.push(res);
      //jika tidak maka perbarui data
      else this.shoesapps[idx]=data;
      }
  })

}

//Membuat Fungsi Isi  Detail Produk:
isidetailProduk(){
  const dialogRef = this.dialog.open(IsidetailComponent, {
    width: '450px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog ditutup');
  });

}

}
