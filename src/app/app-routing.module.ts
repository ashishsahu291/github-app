import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubusersComponent } from './githubusers/githubusers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  { path: 'users', component: GithubusersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
