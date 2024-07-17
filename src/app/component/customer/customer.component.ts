import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { ResultAPI } from "src/app/models/resultapi.model";
import { CustomerAPIService } from "src/app/services/customerapi.service";

@Component({

    templateUrl: './customer.component.html',

    styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {

    idCustomer: any;
    customer: any;
    customers: CustomerAPI[];
    result: any[];

    page: number = 1;
    count: number = 0;
    tableSize: number = 5;
    tableSizes: any = [5, 10, 15, 20];
    constructor(
        private customerAPIService: CustomerAPIService,

    ) {

    }

    ngOnInit() {

        this.tailaidsicustomr();
    }
    tailaidsicustomr() {
        this.customerAPIService.findAll().then(
            res => {
                this.customers = res as CustomerAPI[];
                console.log(this.customers);

                this.result = this.customers;

            },
            err => {
                console.log(err);
            }
        )
    }

    onTableSizeChange(evt: any) {
        this.tableSize = evt.target.value;
        this.page = 1;
        this.tailaidsicustomr();
    }

    onTableDataChange(evt: any) {
        this.page = evt;
        this.tailaidsicustomr();

    }

    xoa(idCustomer: any) {
        var result = confirm('Are you sure ? ');
        console.log(idCustomer);
        if (result) {
            this.customerAPIService.delete(idCustomer).then(
                res => {

                    console.log(res);
                    this.tailaidsicustomr();
                }, err => {

                    console.log(err);
                }
            )
        }
    }
    addCustomer() {

    }
    dong() {

    }
    searchUsername(evn: any) {

        var nameCustomer = evn.target.value;
        console.log(nameCustomer);

        if (nameCustomer == 0 || nameCustomer == null) {
            this.result = this.customers
        }
        else {

            this.result = this.customers.filter(b => b.nameCustomer.toString().toLowerCase().includes(nameCustomer));

        }
    }

}