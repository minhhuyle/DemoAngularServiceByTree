import { Component, OnInit } from '@angular/core';
import { SallService } from '../sall.service';
import { SermService } from '../serm.service';

@Component({
  selector: 'app-bcom',
  templateUrl: './bcom.component.html',
  styleUrls: ['./bcom.component.css'],
  providers: [SallService]
})
export class BcomComponent implements OnInit {

  private data = [];

  constructor(private sallService: SallService, private sermService: SermService) {
  }

  ngOnInit() {
    this.data = this.sallService.customers;
  }

  addRandom() {
    this.sallService.customers.push(" " + Math.random().toPrecision(2));
    this.sallService.addRandom();
  }

  getCustomerData() {
    return "Data Sall Service : " +  this.data.toString();
  }

  getSermData() {
    return this.sallService.getSerm();
  }
}
