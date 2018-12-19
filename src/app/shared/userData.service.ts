import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Company } from './userData.model';
import { Subject } from 'rxjs';

@Injectable()
export class UserDataService{
    public companyChenged = new Subject<Company[]>();
    public currentRoute = new Subject<string>();
    public loggedUserRole = new Subject<string>();
    constructor(private user: UserService){}
    companies: Company[] = [
        {companyName: "Kda group", createdBy: "shubham.pandey128@gmail.com", CompanyAddress: "delhi", approved: false},
        {companyName: "satyma", createdBy: "Ajitmishra35@gmail.com", CompanyAddress: "gurgaon", approved: true},
        {companyName: "vishakha", createdBy: "shubham.pandey128@gmail.com", CompanyAddress: "jalander", approved: false},
        {companyName: "techsolvyy", createdBy: "vikashmishra@gmail.com", CompanyAddress: "bhopal", approved: false},
        
    ]  ;

    getCompanies(){
        return this.companies.slice();
    }
    getCompany(index){
        return this.companies[index];
    }
    getUserCompanies(email: string){
        let arr=[];
        for( const company of this.companies){
            if(company.createdBy === email){
                arr.push(company);
            }
        }
        return arr;
    }
    addNewCompany(newCompany: Company){
        this.companies.push(newCompany);
        this.companyChenged.next(this.companies);
    }
    deleteCompany(index: number){
        this.companies.splice(index,1);
        this.companyChenged.next(this.companies);
    }

    getApproved(index){
        this.companies[index].approved =true;
        this.companyChenged.next(this.companies);
  }
    updateCompany(index: number, newCompany: Company){
        this.companies[index]= newCompany;
        this.companyChenged.next(this.companies);
    }
}