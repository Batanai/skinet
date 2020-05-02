import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  constructor(private shopSevice: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.shopSevice.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
    }, error => {
      console.log(error);
    });
  }

}
