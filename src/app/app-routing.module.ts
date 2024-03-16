import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTestComponent } from './page/new-test/new-test.component';

const routes: Routes = [
  {
    path : 'new-test',component: NewTestComponent
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
