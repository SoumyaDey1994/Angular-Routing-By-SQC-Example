import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { P404Component } from './error/404.component';
import { P500Component } from './error/500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArchiveComponent,
    PageNotFoundComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    // RouterModule.forRoot([
    //   {
    //     path : '',
    //     component : HomeComponent
    //   },
    //   {
    //     path : 'archive/:year/:month',
    //     component : ArchiveComponent
    //   },
    //   {
    //     path : '**',
    //     component : PageNotFoundComponent
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
