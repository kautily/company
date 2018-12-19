import { Company } from './../shared/userData.model';
import { UserDataService } from './../shared/userData.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName:string;
  companies: Company[] ;
  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private userDataService: UserDataService) { }

  ngOnInit() {
    this.companies = this.userDataService.getUserCompanies(localStorage.getItem("currentuserId"));
  }

  createCompany(){
    this.router.navigate(['createcompany/'], {relativeTo: this.route})
  }

}
