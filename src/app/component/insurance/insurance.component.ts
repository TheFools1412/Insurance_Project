import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { InsuranceAPI } from "src/app/models/insuranceapi.model";
import { InsuranceAPIService, } from "src/app/services/insuranceapi.service";

@Component({

    templateUrl: './insurance.component.html',


})
export class InsuranceComponent implements OnInit {

    insurance: any;
    insurances: InsuranceAPI[];
    tieude: any;
    dangThemSua:any;

    result: any[];
    constructor(
        private insuranceAPIService: InsuranceAPIService,
    ) {

    }

    ngOnInit() {
        this.tailaidsinsurance();
    }
    tailaidsinsurance() {
        this.insuranceAPIService.findAll().then(
            res => {
                this.insurances = res as InsuranceAPI[];
                console.log(this.insurances);
                this.result = this.insurances
            },
            err => {
                console.log(err);
            }
        )
    }
    addInsurance() {
        this.insurance = {
            IdInsurance : 0,
            Name: "",
            Optiondate: "",
            DateStart:"",
            DateEnd:"",
            Price:0,
            IdCustomer:0,
            TypeInsurance:0,
            Note:""
        }
        this.dangThemSua = true;

        this.tieude = "Add Insurance ";
    }
    dong(){
        this.dangThemSua = false;
        this.tailaidsinsurance();
    }
    updateinsurance(insurance :any){
        this.insurance = insurance;
        console.log(insurance);
        this.dangThemSua=true;
        this.tieude= "Update Insurance";

    }
}