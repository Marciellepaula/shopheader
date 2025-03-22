import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    { image: '/mascar.png', name: 'MASCARA TRIPLA ELASTICO C/50' },
    { image: '/touca.png', name: 'TOUCA SANFONADA DESC. C/100' },
    { image: '/agua.png', name: 'AGUA P/ AUTOCLAVE 5L' },
    { image: '/gel.png', name: 'GEL P/ ULTRASSOM 5KG' },
  ];

}


