import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { AgentsComponent } from './agents/agents.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { ApplicantPassportComponent } from './applicant-passport/applicant-passport.component';
import { ApplicantPremedComponent } from './applicant-premed/applicant-premed.component';
import { ApplicantExpenseComponent } from './applicant-expense/applicant-expense.component';
import { EditagentComponent } from './editagent/editagent.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopnavComponent,
    HomeComponent,
    EditprofileComponent,
    ApplicantsComponent,
    AgentsComponent,
    ApplicantDetailsComponent,
    AgentDetailsComponent,
    FooterComponent,
    LoginComponent,
    FirstpageComponent,
    ChangepasswordComponent,
    ApplicantprofileComponent,
    ApplicantPassportComponent,
    ApplicantPremedComponent,
    ApplicantExpenseComponent,
    EditagentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
