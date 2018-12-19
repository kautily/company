import { AdminAuthGuard } from './auth/admin-auth-guard';
import { AuthGuard } from './auth/auth-guard.service';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './admin/edit/edit.component';

const routes: Routes =[
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path : "login", component: LoginComponent},
    {path : "register", component: RegisterComponent},
    {path: "user", component: UsersComponent, canActivate: [AuthGuard]},
    {path: "admin", component: AdminComponent,canActivate: [AuthGuard,AdminAuthGuard], children:[
        {path: "edit/:id", component: EditComponent},
        ]},
    {path: ":role/createcompany", component: CreateCompanyComponent},
    
    
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}