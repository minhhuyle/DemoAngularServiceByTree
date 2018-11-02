import { Component, OnInit } from '@angular/core';
import { SallService } from '../sall.service';
import { SermService } from '../serm.service';

@Component({
  selector: 'app-acom',
  templateUrl: './acom.component.html',
  styleUrls: ['./acom.component.css'],
  providers: [SallService]
})
export class AcomComponent implements OnInit {

  data = [];
  constructor(private sallService: SallService) { }

  ngOnInit() {
    this.data = this.sallService.customers;
  }

  addRandom() {
    this.sallService.customers.push(" " + Math.random().toPrecision(2));
    this.sallService.addRandom();
  }

  getSallServiceData() {
    return this.sallService.getCustomers();
  }

  getSermServiceData() {
    return this.sallService.getSerm();
  }
}
