
import { Injectable } from "@angular/core";
import { BaseUrlService } from "./baseurl.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";



@Injectable()
export class InsuranceAPIService {

    readonly PhotoUrl = "http://localhost:5226/images/";
    constructor(
        private baseURLService: BaseUrlService,
        private httpClient: HttpClient

    ) { }

    async  findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'insurance/findall')) ;
    }
   
   
    async addInsurance(insurance : any){
        return await lastValueFrom(this.httpClient.post(this.baseURLService.getBaseUrl()+'insurance/create',insurance )) ;
    }
    async updateInsurance(insurance : any){
        return await lastValueFrom(this.httpClient.put(this.baseURLService.getBaseUrl()+'insurance/update',insurance )) ;
    }
   
}