import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContractAPI } from "src/app/models/contractapi.model";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { InsuranceAPI } from "src/app/models/insuranceapi.model";
import { ContractAPIService } from "src/app/services/contractapi.service";
import { CustomerAPIService } from "src/app/services/customerapi.service";
import { InsuranceAPIService, } from "src/app/services/insuranceapi.service";

@Component({

    templateUrl: './detailcontractcustomer.component.html',


})
export class DetailContractCustomerComponent implements OnInit {

    //result: any[];
    //contracts: ContractAPI[];
    contract: ContractAPI;
    customers: CustomerAPI[];
    customer: CustomerAPI;
    // insurance:InsuranceAPI;
    // 
    nameCustomer: any;
    birthday: any;
    adress: any;
    phone: any;
    email: any;
    username: any;
    password: any;
    created: any;
    identification: any;
    profilePhoto: any;
    result: any;
    id: any;
    contractNumber: any;
    idCustomer: any;
    dateStart: any;
    dateEnd: any;
    idTypeInsurance: any;
    amountInsurance: any;
    premium: any;
    note: any;
    contracts: ContractAPI[];


    constructor(
        private contractAPIService: ContractAPIService,
        private activatetedRoute: ActivatedRoute,
        private customerapiservice: CustomerAPIService,
    ) {

    }

    ngOnInit() {


        this.activatetedRoute.paramMap.subscribe(p => {
            var id = this.activatetedRoute.snapshot.paramMap.get('id');
            console.log('--------------')
            console.log('id : ' + id);

            this.contractAPIService.find(id).then(
                res => {
                    this.contracts = res as ContractAPI[];
                    console.log(this.contracts);

                    this.result = this.contracts;
                    

                }, err => {
                    console.log(err);
                }
            );



        })




    }



}