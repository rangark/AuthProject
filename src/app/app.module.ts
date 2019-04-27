import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModuleModule} from './loginmodule/loginmodule.module';
import { RegisterModuleModule} from './registermodule/registermodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   // ,LoginModuleModule
   // ,RegisterModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
