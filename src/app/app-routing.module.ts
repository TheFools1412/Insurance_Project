import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { HomeComponent } from './component/page/home/home.component';
import { AboutComponent } from './component/page/about/about.component';

import { LoginComponent } from './component/page/login/login.component';
import { OurServiceComponent } from './component/page/ourservice/ourservice.component';
import { ContactUsComponent } from './component/page/contactus/contactus.component';
import { FeatureComponent } from './component/page/feature/feature.component';
import { AppointmentComponent } from './component/page/appointment/appointment.component';
import { AdminComponent } from './component/admin/admin.component';
import { RegisterComponent } from './component/page/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CustomerComponent } from './component/customer/customer.component';
import { InsuranceComponent } from './component/insurance/insurance.component';
import { LoginUserComponent } from './component/page/login/loginuser.component';
import { WelcomeComponent } from './component/page/welcome/welcome.component';
import { CustomerInfoComponent } from './component/customerinfo/customerinfo.component';
import { UpdateCustomerComponent } from './component/customer/updatecustomer.component';
import { ContractComponent } from './component/contract/contract.component';
import { AddupdateInsuranceComponent } from './component/insurance/add-update-insurance.component';
import { ListContractComponent } from './component/contract/listcontract.component';
import { InsuranceInfoComponent } from './component/insuranceinfo/insuranceinfo.component';
import { ContractCustomerComponent } from './component/contract/contractcustomer.component';
import { AddContractCustomerComponent } from './component/contract/addcontractcustomer.component';
import { DetailContractCustomerComponent } from './component/contract/detailcontractcustomer.component';
import { AuthGuardService } from './services/authGuard.service';
import { RoleGuardService } from './services/roleGuard.service';
import { PaymentContractCustomerComponent } from './component/contract/paymentcontractcustomer.component';
import { HistoryComponent } from './component/history/history.component';






const routes: Routes = [
  {
    path: '', component: WebComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'web', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'ourService', component: OurServiceComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'feature', component: FeatureComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: 'login', component: LoginComponent },
      { path: 'loginuser', component: LoginUserComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'customer', component: CustomerComponent },
      {
        path: 'welcome', component: WelcomeComponent, children: [
          { path: 'customerinfo', component: CustomerInfoComponent },
          { path: 'insuranceinfo', component: InsuranceInfoComponent },
          { path: 'contractcustomer', component: ContractCustomerComponent },
          { path: 'addcontractcustomer', component: AddContractCustomerComponent },
          { path: 'detailcontractcustomer', component: DetailContractCustomerComponent },
          { path: 'paymentcontractcustomer', component: PaymentContractCustomerComponent },
        ]
      },
    ]
  },

 
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'insurance', component: InsuranceComponent },
      { path: 'add-update-insurance', component: AddupdateInsuranceComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'updatecustomer', component: UpdateCustomerComponent },
      { path: 'contract', component: ContractComponent },
      { path: 'listcontract', component: ListContractComponent },
      { path: 'history', component: HistoryComponent },
    ]
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
