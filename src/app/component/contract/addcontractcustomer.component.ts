import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ContractAPI } from "src/app/models/contractapi.model";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { InsuranceAPI } from "src/app/models/insuranceapi.model";
import { ResultAPI } from "src/app/models/resultapi.model";
import { ContractAPIService } from "src/app/services/contractapi.service";
import { InsuranceAPIService, } from "src/app/services/insuranceapi.service";

@Component({

    templateUrl: './addcontractcustomer.component.html',


})
export class AddContractCustomerComponent implements OnInit {

    addContractForm: FormGroup;
    result: any[];
    contracts: ContractAPI[];
    customer: CustomerAPI;
    insurances: InsuranceAPI[];
    contract: any;
    insurance: any;
    price: any;

    contractNumber: any;
    dateStart: any;
    dateEnd: any;
    idCustomer: any;
    idTypeInsurance: any;
    amountInsurance: any;
    premium: any;
    note: any;


    constructor(
        private formBuider: FormBuilder,
        private contractAPIService: ContractAPIService,
        private activatetedRoute: ActivatedRoute,
        private insuranceAPIService: InsuranceAPIService,
        private router: Router,
    ) {

    }

    ngOnInit() {
        this.activatetedRoute.paramMap.subscribe(
            result => {

                this.addContractForm = this.formBuider.group({
                    contractNumber: ["", [
                        Validators.required,
                    ]],
                    dateStart: ["", [
                        Validators.required,
                    ]],
                    dateEnd: ["", [
                        Validators.required,
                    ]],
                    idCustomer: 0,
                    idTypeInsurance: 0,
                    amountInsurance: 0,
                    premium: 0,
                    note: ""
                })
                
            }
           


        );
      

        // this.insuranceAPIService.findAll().then(
        //     res =>{
        //         this.insurances = res as InsuranceAPI[];
        //     },
        //     err =>{
        //         console.log(err);
        //     }
        // )

    }
    save() {
        
        var contract: ContractAPI = this.addContractForm.value as ContractAPI;
        console.log(contract);


        var formData = new FormData();
        formData.append('strcontract', JSON.stringify(contract));
        console.log(formData)

        this.contractAPIService.create(formData).then(
            res => {
                console.log(res);
                var resultAPI: ResultAPI = res as ResultAPI;

                if (resultAPI.result) {
                    alert('thanh cong')
                    this.router.navigate([('/welcome/contractcustomer'),{idCustomer: this.idCustomer }])
                } else {
                    alert('them that bai')
                }
            }, err => {
                console.log(err);
            }
        )

    }
}
