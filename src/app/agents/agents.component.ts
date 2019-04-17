import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  constructor(private router: Router){
  }

  public onagentsClick(){
      this.router.navigate(['./agentdetails']);
  }

  ngOnInit() {
  }

}
