import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VehicleComponent } from './vehicle.component';
import { AuthModule } from '@auth0/auth0-angular';
import { NavComponent } from './nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { addVehicleComponent } from './addvehicle.component';
import { modifyVehicleComponent } from './modifyvehicle.component';
import { FooterComponent } from './footer.component';
import { ProfileComponent } from './profile.component';

import { NgxPaginationModule } from 'ngx-pagination';

var routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: 'vehicles/:id',
    component: VehicleComponent
  },
  {
    path: 'addvehicle',
    component: addVehicleComponent
  },
  {
    path: 'modifyvehicle/:id',
    component: modifyVehicleComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, VehiclesComponent, HomeComponent, VehicleComponent, 
    NavComponent, addVehicleComponent, modifyVehicleComponent, FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AuthModule.forRoot( {
      domain: 'dev-xs55r077.us.auth0.com',
      clientId: 'X1sYrbHgKqL7Xd12SeLlWtP3I8w0aWgc'
    })
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
