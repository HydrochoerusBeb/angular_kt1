import { Component, OnInit, inject } from '@angular/core';
import { ProductsItemsComponent } from '../products-items/products-items.component';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ProductsItemsComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  public Products = inject(ProductsService)
  
  ngOnInit(): void {
      this.Products.getProducts()
  }
  
}
