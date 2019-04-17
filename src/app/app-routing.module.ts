import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { AgentsComponent } from './agents/agents.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';

const routes: Routes = [
{
	path: 'home',
	component: HomeComponent
},
{
	path: 'editprofile',
	component: EditprofileComponent
},
{
	path: 'applicants',
	component: ApplicantsComponent
},
{
	path: 'agents',
	component: AgentsComponent 	
},
{
	path: 'applicantdetails',
	component: ApplicantDetailsComponent
},
{
	path: 'agentdetails',
	component: AgentDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
