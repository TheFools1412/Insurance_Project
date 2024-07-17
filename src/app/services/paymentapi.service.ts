
import { Injectable } from "@angular/core";
import { BaseUrlService } from "./baseurl.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";



@Injectable()
export class PaymentAPIService {

    readonly PhotoUrl = "http://localhost:5226/images/";
    constructor(
        private baseURLService: BaseUrlService,
        private httpClient: HttpClient

    ) { }

   
    async find(id:any){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'payment/findId/'+id)) ;
    } 
   
}