import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login', 
    loadChildren: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  { path: '**', 
    redirectTo: 'user/home' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
