import { UserDataService } from './../shared/userData.service';
import { Company } from './../shared/userData.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  createdBy: string;
  approvStatus: boolean = false;
  constructor(private router: Router,
              private route:ActivatedRoute,
              private userDataService: UserDataService) { }

  ngOnInit() {
    this.createdBy = localStorage.getItem("currentuserId");
     if(localStorage.getItem("currentuserRole") === 'admin'){
       this.approvStatus = true;
     }

  }
  onFormSubmit(form: NgForm){
    let newCompany  = new Company;
    newCompany.companyName = form.value.companyName;
    newCompany.createdBy = this.createdBy;
    newCompany.CompanyAddress = form.value.companyAddress;
    newCompany.approved = this.approvStatus;
    this.userDataService.addNewCompany(newCompany);
    this.router.navigate(["../"], {relativeTo: this.route});
    
  }
  onCancel(){
    this.router.navigate(["../"], {relativeTo: this.route});
  }
}
