import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: { image: string; name: string };
}



// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-product-card',
//   templateUrl: './product-card.component.html',
//   styleUrls: ['./product-card.component.css']
// })
// export class ProductCardComponent {
//   @Input() product: any; // Receiving product data from parent
// }
