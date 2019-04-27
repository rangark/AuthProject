import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginModuleModule } from './login-module/login-module.module';
//import { } from ''

const routes: Routes = [
{path:"loginmodule", loadChildren:'app/loginmodule/loginmodule#LoginModuleModule'},
{path:"**", loadChildren:'app/loginmodule/loginmodule#LoginModuleModule'},
{path:"registermodule", loadChildren:'registermodule/registermodule#RegisterModuleModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
