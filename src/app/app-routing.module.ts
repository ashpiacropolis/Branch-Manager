import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { AgentsComponent } from './agents/agents.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { ApplicantPassportComponent } from './applicant-passport/applicant-passport.component';
import { ApplicantPremedComponent } from './applicant-premed/applicant-premed.component';
import { ApplicantExpenseComponent } from './applicant-expense/applicant-expense.component';
import { EditagentComponent } from './editagent/editagent.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	  },
	  {
		path: 'login',
		component: LoginComponent
	  },
		{
		path: 'first',
		component: FirstpageComponent,
		children:[
		  {
			path:'',
			component:HomeComponent,
		  },
		  {
			path:'home',
			component:HomeComponent,
				},
				{
					path: 'editprofile',
					component: EditprofileComponent
				},	
				{
					path: 'editagent',
					component: EditagentComponent
				},
				{
					path: 'changepassword',
					component: ChangepasswordComponent
				},
				{
					path: 'agents',
					component: AgentsComponent
				},
				{
					path: 'applicants',
					component: ApplicantsComponent
				},
				{
					path: 'agentdetails',
					component: AgentDetailsComponent
				},
				{
					path: 'applicantprofile',
					component: ApplicantprofileComponent,
					children:[
						{
							path:'',
							component: ApplicantDetailsComponent
						},
						{
							path: 'applicantPremed',
							component: ApplicantPremedComponent	
						},
						{
							path: 'applicantdetails',
							component: ApplicantDetailsComponent,
						},
					{
							path: 'applicantPassport',
							component: ApplicantPassportComponent
						},
						{
							path: 'applicantExpense',
							component: ApplicantExpenseComponent
						},
					]
				},
				
			]
		},
	];
	
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
