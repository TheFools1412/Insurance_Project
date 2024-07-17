import { Injectable } from "@angular/core";

@Injectable()

export class BaseUrlService{

    private BASE_URl : string = "http://localhost:5226/api/";

    public getBaseUrl():string{
        return this.BASE_URl;
    }
}