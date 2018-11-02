import { Injectable } from '@angular/core';
import { SermService } from './serm.service';

@Injectable()
export class SallService {
  customers = [];

  constructor(private sermService: SermService) {
  }

  getSerm() {
    return "Data Serm Service : " + this.sermService.data.toString();
  }



  addRandom() {
    this.sermService.data.push(" " + Math.random().toPrecision(2));
  }


  getCustomers(): Array {
    return "Data Serm Service : " + this.customers;
  }
}
