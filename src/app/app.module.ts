import { AdminAuthGuard } from './auth/admin-auth-guard';
import { AuthGuard } from './auth/auth-guard.service';
import { FilterPipe } from './admin/filtes pipes/filter.pipe';
import { ShortPipe } from './shared/short.pipe';
import { AuthService } from './auth/auth.service';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { UserDataService } from './shared/userData.service';
import { UserService } from './shared/user.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './appRouting.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './admin/edit/edit.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    EditComponent,
    UsersComponent,
    HeaderComponent,
    CreateCompanyComponent,
    ShortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [UserService, UserDataService,AuthService,AuthGuard,AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
