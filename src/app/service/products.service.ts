import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: any[] = []
  public categories: Set<any>  
  public nameValue: string = ''
  public priceBorder: number = 900
  public ratingBorder: number = 5
  public choosenCategory: string = "all"
  public priceMax: number = 0

  constructor() { }

  public getProducts() :void {
    fetch('https://dummyjson.com/products?limit=50')
      .then(res => res.json())
      .then(data => {this.products = data.products})
      .then(data => this.categories = new Set(this.products.map(el => el.category)))
      .then(data => this.priceMax = this.products.map(el => el.price).reduce((max, curVal) => Math.max(max, curVal), -Infinity))
  }


  public changedProductsBaller(): any[] {
    return this.products
    .filter( product => product.title.toLowerCase().includes(this.nameValue.toLowerCase()))  
    .filter(product => this.choosenCategory === 'all' ? product.category !== this.choosenCategory : product.category === this.choosenCategory)
    .filter(product => product.price <= this.priceBorder)
    .filter(product => product.rating <= this.ratingBorder)
  }


}
