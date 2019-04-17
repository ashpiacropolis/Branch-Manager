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
    AgentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
