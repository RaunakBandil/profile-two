import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
{path:"admin" , loadChildren:()=>import('./admin/admin.module')
.then(mod=>mod.AdminModule)},

{path:"user" , loadChildren:()=>import('./user/user.module')
.then(mod=>mod.UserModule)},

];


export const AppRoutingModule = RouterModule.forRoot(routes);
