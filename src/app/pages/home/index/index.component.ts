import { Component, OnInit } from '@angular/core';
import { Items } from '../item.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  products: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.products = Items
  }

}
