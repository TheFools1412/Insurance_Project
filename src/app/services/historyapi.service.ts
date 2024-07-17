import { Injectable } from "@angular/core";
import { BaseUrlService } from "./baseurl.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable()
export class HistoryAPIService {

    readonly PhotoUrl = "http://localhost:5226/images/";
    private history:any=null;
    constructor(
        private baseURLService: BaseUrlService,
        private httpClient: HttpClient
    ) { }

    async  findAll(){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'history/findall')) ;
    }
    async find(id:any){
        return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'history/findId/' + id)) ;
    }
}