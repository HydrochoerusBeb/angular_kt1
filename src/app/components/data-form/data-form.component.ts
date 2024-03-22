import { Component, inject } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {
  public products = inject(ProductsService)
  // public price = this.products.MaxPriceBaller
}
