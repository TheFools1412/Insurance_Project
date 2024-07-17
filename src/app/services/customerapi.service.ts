
import { Injectable } from "@angular/core";
import { BaseUrlService } from "./baseurl.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";



@Injectable()
export class CustomerAPIService {

    readonly PhotoUrl = "http://localhost:5226/images/";
    private customer:any=null;
    constructor(
        private baseURLService: BaseUrlService,
        private httpClient: HttpClient
    ) { }

    async  findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'customer/findallcustomer')) ;
    }
    async findemail(email:any){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'customer/find/' + email)) ;
    }
   
    async registerCustomer(formData : FormData,){
        return await lastValueFrom(this.httpClient.post(this.baseURLService.getBaseUrl()+'customer/create',formData, )) ;
    }
    
    async login(loginForm: any){
        return await lastValueFrom(this.httpClient.post(this.baseURLService.getBaseUrl()+'customer/login',loginForm )) ;
    }
    async delete(idCustomer : any){
        return await lastValueFrom(this.httpClient.delete(this.baseURLService.getBaseUrl() + 'customer/delete/'+idCustomer )) ;
    }
    async find(idCustomer:any){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'customer/findId/' + idCustomer)) ;
    }  

    async getCustomerInfo(idCustomer: any){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'customer/getCustomerInfo/' + idCustomer)) ;
    }
    async update(customer : any){
        return await lastValueFrom(this.httpClient.put(this.baseURLService.getBaseUrl()+'customer/update',customer )) ;
    }
}