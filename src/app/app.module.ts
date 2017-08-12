import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
import { HttpModule } from '@angular/http';

import { LoginModule } from "./modules/login/login.module";
import { HomeModule } from "./modules/home/home.module";
import { AdminModule } from "./modules/admin/admin.module";
import { GameModule } from "./modules/game/game.module";
import { WebApiModule } from "./modules/web-api/web-api.module";

import { AppComponent } from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { WebApiService } from "./modules/web-api/services/web-api.service";

const routes: Array<Route> = [
  {
    path: 'login',
    loadChildren: 'app/modules/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: 'app/modules/home/home.module#HomeModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/modules/admin/admin.module#AdminModule'
  },
  {
    path: 'game',
    loadChildren: 'app/modules/game/game.module#GameModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    LoginModule,
    HomeModule,
    WebApiModule
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
