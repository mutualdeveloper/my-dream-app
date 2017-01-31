import { Component, OnInit } from '@angular/core';
import { ItemCustomer} from './customer.model';
import { CustomerServices} from './customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [ CustomerServices]
})
export class CustomerComponent implements OnInit{
  public customerData: ItemCustomer;
  constructor(private customerService: CustomerServices) { }

  ngOnInit(){
    this.getCustomerData();
  }

  getCustomerData(){
    this.customerService.getCustomerData().subscribe(
      resp => this.customerData = resp,
      error => console.log(error)
    );
  }
}
