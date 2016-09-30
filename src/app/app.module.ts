import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import SharedModule from "./modules/shared/shared.module";
import {routing, appRoutingProviders} from "./app.routing";
import {HttpModule} from "@angular/http";
import {UserService} from "./services/user.service";
import {RegistrationService} from "./modules/registration/registration.service";
import {HomeComponent} from "./components/home.component";
import {RegistrationModule} from "./modules/registration/registration.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import { environment } from '../environments/environment';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {AuthService} from './services/auth.service';
import {RequestService} from './services/request.service';
import { ValidationService } from './services/validation.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    HttpModule,
    RegistrationModule,
    DashboardModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
    UserService,
    RegistrationService,
    AUTH_PROVIDERS,
    AuthService,
    RequestService,
    ValidationService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
