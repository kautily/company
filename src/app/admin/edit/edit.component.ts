import { Company } from './../../shared/userData.model';
import { UserDataService } from './../../shared/userData.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  company: Company;
  id;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: UserDataService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id =+params["id"];
        this.company = this.dataService.getCompany(this.id);
      }
    );

  }


  onCancel(){
    this.router.navigate(["../../"], {relativeTo: this.route})
  }
  onFormSubmit(form: NgForm){
    let newCompany = this.company;
    newCompany.companyName = form.value.companyName;
    newCompany.CompanyAddress = form.value.companyAddress;
    this.dataService.updateCompany(this.id, newCompany);
    this.router.navigate(["../../"], {relativeTo: this.route})
    
  }
}
