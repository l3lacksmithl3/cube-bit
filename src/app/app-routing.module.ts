import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTestComponent } from './page/new-test/new-test.component';
import { NewPageComponent } from './page/new-page/new-page.component';

const routes: Routes = [
  {
    path : 'new-test',component: NewTestComponent
  },
  {
    path : 'new-page',component: NewPageComponent
  },


  {
    path: '**',
    redirectTo: 'new-test'
    // redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
