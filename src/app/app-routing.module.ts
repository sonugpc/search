import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [{
 

  path:'',
  redirectTo :"/home",
  pathMatch: 'full'
},
{
  path: 'home',
  component: ViewPageComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
