import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  vehicles_list: any = [];
  page: number = 1;
  theHttpService: any;

  constructor(public webService: WebService,
    public authService: AuthService, private route: ActivatedRoute,) { }

  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
    }
    this.vehicles_list = this.webService.getVehicles(this.page);
  }

  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage['page'] = this.page;
      this.vehicles_list = this.webService.getVehicles(this.page);
    }
    else{
      window.alert("Cannot go back! You are in page " + this.page)
    }

  }

  nextPage() {
    this.page = this.page + 1;
    sessionStorage['page'] = this.page;
    this.vehicles_list = this.webService.getVehicles(this.page);
  }

  nextTenPages() {
    this.page = this.page + 10;
    sessionStorage['page'] = this.page;
    this.vehicles_list = this.webService.getVehicles(this.page);
  }

  previousTenPages() {
    if (this.page > 10) {
      this.page = this.page - 10;
      sessionStorage['page'] = this.page;
      this.vehicles_list = this.webService.getVehicles(this.page);
    }
    else{
      window.alert("Cannot go back 10 pages! You are in page " + this.page)
    }
  }

  addVehicle() {
  }

  modifyVehicle() {
  }

}
