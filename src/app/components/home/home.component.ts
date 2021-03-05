import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interface/products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Products: Array<product> = [
    {Name:'iphone11',price:1500,Desc:'Mobile phone',ProductPath:'assets/pics/Iphone 11.png'},
    {Name:'samsung 10 plus',price:1400,Desc:'Mobile phone',ProductPath:'assets/pics/Samsung 10 plus.png'}
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
