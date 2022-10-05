import { Component } from '@angular/core';
import { Cliente } from './model/product.model';
import { Product } from './model/product.model';
import { Sale } from './model/product.model';
import { DetailSale } from './model/product.model';
import { Venta } from './model/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string="t";
  p_name: string = "";
  p_price: number = 0;
  p_image: string = "";
  p_description: string ="";
  p_porcentaje: string = "";
  p_estado: string ="";
  products: Product[] = [{
    name: "parquet",
    price: 28,
    image: "https://media.istockphoto.com/photos/sample-of-wood-chipboard-wooden-laminate-veneer-material-for-interior-picture-id1135678299?b=1&k=20&m=1135678299&s=612x612&w=0&h=JVmRpRls_0Pq9f5GT2EPtmWXbzlLMXGlKX6L4YOuKU8=",
    description: "Paquete de Parquet  x24 unidades",
    porcentaje: "100%",
    estado: "Entregado"
  }];

  addProduct(): void{
    const newProduct ={
      name: this.p_name,
      price: this.p_price,
      image: this.p_image,
      description: this.p_description,
      porcentaje: this.p_porcentaje,
      estado: this.p_estado
    }
    this.products.push(newProduct);
    this.p_name = "";
    this.p_price = 0;
    this.p_image = "";
    this.p_porcentaje="";
    this.p_estado="";
  }
}
