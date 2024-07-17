import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { InsuranceAPI } from "src/app/models/insuranceapi.model";
import { InsuranceAPIService } from "src/app/services/insuranceapi.service";

@Component({
    selector: 'add-update-insurance',
    templateUrl: './add-update-insurance.component.html',
    encapsulation: ViewEncapsulation.None

})

export class AddupdateInsuranceComponent implements OnInit {

    idInsurance: any;
    name: any;
    optiondate: any;
    dateStart: any;
    dateEnd: any;
    price: any;
    idCustomer: any;
    typeInsurance: any;
    note: any;


    @Input() insurance: any;
    insurances: InsuranceAPI[];


    constructor(
        private insuranceapiservice: InsuranceAPIService,

    ) {

    }

    ngOnInit() {
        if (this.insurance.IdCustomer != 0) {
            this.idInsurance = this.insurance.idInsurance;
            this.name = this.insurance.name;
            this.optiondate = this.insurance.optiondate;
            this.dateStart = this.insurance.dateStart;
            this.dateEnd = this.insurance.dateEnd;
            this.price = this.insurance.price;
            this.idCustomer = this.insurance.idCustomer;
            this.typeInsurance = this.insurance.typeInsurance;
            this.note = this.insurance.note;
        } else {
            this.idInsurance = this.insurance.IdInsurance;
            this.name = this.insurance.Name;
            this.optiondate = this.insurance.Optiondate;
            this.dateStart = this.insurance.DateStart;
            this.dateEnd = this.insurance.DateEnd;
            this.price = this.insurance.Price;
            this.idCustomer = this.insurance.IdCustomer;
            this.typeInsurance = this.insurance.TypeInsurance;
            this.note = this.insurance.Note;
        }

    }
    addInsurance() {
        var val = {
            name:this.name,
            optiondate:this.optiondate,
            dateStart:this.dateStart,
            dateEnd:this.dateEnd,
            price:this.price,
            idCustomer:this.idCustomer,
            typeInsurance:this.typeInsurance,
            note:this.note,

        };
        console.log(val);
        
        this.insuranceapiservice.addInsurance(val).then(
            res => {
                this.insurances =  res as InsuranceAPI[];
                console.log(this.insurances);
                alert('Add Insurance Succes')
            },
            err => {
                console.log(err);
                alert('Add Insurance Fail ')
            }
        )
    }
    updateInsurance() {

        var val = {
            idInsurance:this.idInsurance,
            name:this.name,
            optiondate:this.optiondate,
            dateStart:this.dateStart,
            dateEnd:this.dateEnd,
            price:this.price,
            idCustomer:this.idCustomer,
            typeInsurance:this.typeInsurance,
            note:this.note,

        };
        console.log(val);
        this.insuranceapiservice.updateInsurance(val).then(
            res =>{
                this.insurances = res as InsuranceAPI[];
                //console.log(this.insurances);
                alert('Update Insurance Succes')
            },
            err => {
                console.log(err);
                alert('Update Insurance Fail ')
            }
        )
    }
}