import { Component, OnInit } from '@angular/core';
import { SallService } from '../../sall.service';

@Component({
  selector: 'app-bchil',
  templateUrl: './bchil.component.html',
  styleUrls: ['./bchil.component.css']
})
export class BchilComponent implements OnInit {

  data = [];

  constructor(private sallService: SallService) {
  }

  ngOnInit() {
    this.data = this.sallService.customers;
  }

  addRandom() {
    this.sallService.customers.push(Math.random());
    this.sallService.addRandom();
  }

  toString() {
    return this.data.toString();
  }

  toString2() {
    return this.sallService.getSerm();
  }
}
