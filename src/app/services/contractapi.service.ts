
import { Injectable } from "@angular/core";
import { BaseUrlService } from "./baseurl.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";



@Injectable()
export class ContractAPIService {

    readonly PhotoUrl = "http://localhost:5226/images/";
    constructor(
        private baseURLService: BaseUrlService,
        private httpClient: HttpClient

    ) { }

    async  findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'contract/findall')) ;
    }
    async findCustomer(idCustomer: any) {
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl() + 'contract/find/'+idCustomer));
    }
    async create(formData : FormData ) {
        return await lastValueFrom(this.httpClient.post(this.baseURLService.getBaseUrl() + 'contract/create/',formData));
    }
    async find(id:any){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'contract/findId/'+id)) ;
    } 
   
}