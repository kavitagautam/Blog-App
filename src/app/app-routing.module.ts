import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'blog',
    loadChildren: ()=> import("../app/modules/blog/blog.module").then((m) => m.BlogModule)
  },
  {
    path:'login',
    loadChildren: ()=> import("../app/modules/authentication/authentication.module").then((m) => m.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
