import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './githubusers/userlist/search/search.component';
import { UserComponent } from './githubusers/userlist/user/user.component';
import { UserdetailsComponent } from './githubusers/userdetails/userdetails.component';
import { UserlistComponent } from './githubusers/userlist/userlist.component';
import { GithubusersComponent } from './githubusers/githubusers.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserlistComponent,
    UserComponent,
    UserdetailsComponent,
    GithubusersComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
