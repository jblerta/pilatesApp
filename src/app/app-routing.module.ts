import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

  {
    path: 'admin', // When the URL is '/admin'
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '', // Default route
    redirectTo: 'user/home',
    pathMatch: 'full'
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
