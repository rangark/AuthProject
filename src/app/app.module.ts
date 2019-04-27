import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginModuleModule} from './login-module/login-module.module';
//import { RegisterModuleModule} from './register-module/register-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //,LoginModuleModule
    //,RegisterModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
