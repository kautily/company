import { UserService } from './../shared/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Company } from './../shared/userData.model';
import { UserDataService } from './../shared/userData.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  companies: Company[];
   currentRoute: string;
   name="";
   searchString : string;
   base: string;
   searchBase = ['companyName','createdBy','CompanyAddress'];
  constructor(private userDataService: UserDataService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }
  ngOnInit() {
    this.name = localStorage.getItem("currentuserName");
    this.companies= this.userDataService.getCompanies();
    this.userDataService.companyChenged.subscribe(
      (comp: Company[])=>{
        this.companies = comp;
      }
    );
  }

  onDelete(index){
    this.userDataService.deleteCompany(index);
  }

  onApprove(index){
    this.userDataService.getApproved(index);
  }

  onEdit(i){
    this.router.navigate(["edit/",i], {relativeTo: this.route})
  }
  createCompany(){
    this.router.navigate(['createcompany'], {relativeTo: this.route})
  }
}
