import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-items',
  standalone: true,
  imports: [],
  templateUrl: './products-items.component.html',
  styleUrl: './products-items.component.css'
})
export class ProductsItemsComponent implements OnInit{
@Input() public id: number 
@Input() public description: string
@Input() public title: string
@Input() public rating: number
@Input() public price: number  
@Input() public image: string
@Input() public category: string

public fullStars: number = 0
public emptyStars: number = 0


ngOnInit(): void {
  this.fullStar()
  this.blankStars()
}

public fullStar() {
  this.fullStars = Math.floor(this.rating);
}

public blankStars() {
  console.log(5 - this.rating)
  this.emptyStars = 5 - this.fullStars;
}

}
