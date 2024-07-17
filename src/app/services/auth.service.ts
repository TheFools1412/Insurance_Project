import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { lastValueFrom } from 'rxjs';
import { BaseUrlService } from './baseurl.service';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private url: BaseUrlService) {}

  baseUrl: String = String(this.url['base_url']);



  async login(data: FormData) {
    return await lastValueFrom(
      this.http.post(this.baseUrl + 'account/login', data)
    );
  }
  async register(data: FormData) {
    return await lastValueFrom(
      this.http.post(this.baseUrl + 'account/register', data)
    );
  }



}
