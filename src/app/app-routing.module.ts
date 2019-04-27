import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"loginmodule", loadChildren:'src/app/loginmodule/loginmodule.module#LoginModuleModule'}
  ,{path:"registermodule", loadChildren:'src/app/registermodule/registermodule.module#RegisterModuleModule'}
 // ,{path:"", component:AppComponent}
  //,{path:"**", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
