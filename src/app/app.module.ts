import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebComponent } from './web.component';
import { HomeComponent } from './component/page/home/home.component';

import { AboutComponent } from './component/page/about/about.component';
import { LoginComponent } from './component/page/login/login.component';
import { HeaderComponent } from './header.component';

import { OurServiceComponent } from './component/page/ourservice/ourservice.component';
import { ContactUsComponent } from './component/page/contactus/contactus.component';
import { FooterComponent } from './footer.component';
import { FeatureComponent } from './component/page/feature/feature.component';
import { AppointmentComponent } from './component/page/appointment/appointment.component';
import { AdminComponent } from './component/admin/admin.component';
import { RegisterComponent } from './component/page/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { InsuranceComponent } from './component/insurance/insurance.component';
import { BaseUrlService } from './services/baseurl.service';
import { InsuranceAPIService } from './services/insuranceapi.service';
import { CustomerAPIService } from './services/customerapi.service';
import { CustomerComponent } from './component/customer/customer.component';
import { LoginUserComponent } from './component/page/login/loginuser.component';
import { WelcomeComponent } from './component/page/welcome/welcome.component';
import { CustomerInfoComponent } from './component/customerinfo/customerinfo.component';
import { UpdateCustomerComponent } from './component/customer/updatecustomer.component';
import { ContractComponent } from './component/contract/contract.component';
import { ContractAPIService } from './services/contractapi.service';
import { AddupdateInsuranceComponent } from './component/insurance/add-update-insurance.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListContractComponent } from './component/contract/listcontract.component';
import { InsuranceInfoComponent } from './component/insuranceinfo/insuranceinfo.component';
import { ContractCustomerComponent } from './component/contract/contractcustomer.component';
import { AddContractCustomerComponent } from './component/contract/addcontractcustomer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailContractCustomerComponent } from './component/contract/detailcontractcustomer.component';
import { AuthGuardService } from './services/authGuard.service';
import { PaymentContractCustomerComponent } from './component/contract/paymentcontractcustomer.component';
import { PaymentAPIService } from './services/paymentapi.service';
import { HistoryComponent } from './component/history/history.component';
import { HistoryAPIService } from './services/historyapi.service';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    OurServiceComponent,
    ContactUsComponent,
    FeatureComponent,
    AppointmentComponent,
    AdminComponent,
    RegisterComponent,
    DashboardComponent,
    InsuranceComponent,
    CustomerComponent,
    LoginUserComponent,
    WelcomeComponent,
    CustomerInfoComponent,
    UpdateCustomerComponent,
    ContractComponent,
    AddupdateInsuranceComponent,
    ListContractComponent,
    InsuranceInfoComponent,
    ContractCustomerComponent,
    AddContractCustomerComponent,
    DetailContractCustomerComponent,
    PaymentContractCustomerComponent,
    HistoryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
   
   
   
  ],
  providers: [
    BaseUrlService,
    InsuranceAPIService,
    CustomerAPIService,
    ContractAPIService,
    PaymentAPIService,
    HistoryAPIService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
