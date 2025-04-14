import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

//riceve i dati dal componente padre cioè ProductListComponent
@Component({
  selector: 'app-product-detail-component',
  imports: [CommonModule],
  templateUrl: './product-detail-component.component.html',
  styleUrl: './product-detail-component.component.css'
})
export class ProductDetailComponentComponent {
  @Input() product!: { name: string; price: number; description: string };
}