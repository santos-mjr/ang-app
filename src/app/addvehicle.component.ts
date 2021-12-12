import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { WebService } from './web.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class addVehicleComponent {
  
  AddVehicleForm: any;

  constructor(public authService: AuthService, 
            private formBuilder: FormBuilder,
            public webService: WebService,
            private route: ActivatedRoute,
            private router: Router) {
  }

  ngOnInit() { 
    this.AddVehicleForm = this.formBuilder.group( {
      
        Make: ['', Validators.required],
        Model: ['', Validators.required],
        Year: ['', Validators.required],
        Engine_Fuel_Type: ['', Validators.required],
        Horsepower: ['', Validators.required],
        Transmission: ['', Validators.required],
        Driven_Wheels: ['', Validators.required],
        Number_of_Doors: ['', Validators.required],
        Market_Category: ['', Validators.required],
        Vehicle_Style: ['', Validators.required],
        Price: ['', Validators.required],
        image_link: ['', Validators.required]
    });
  }

  async onSubmit() {
    await this.webService.addVehicle(this.AddVehicleForm.value).then(() => {
      window.alert("Vehicle Successfully added")
      this.refresh();
    });
  }

  isInvalid(control: any) {
    return this.AddVehicleForm.controls[control].invalid && this.AddVehicleForm.controls[control].touched;
  }

  isUntouched() {
    return this.AddVehicleForm.controls.Make.pristine || this.AddVehicleForm.controls.Model.pristine ||
    this.AddVehicleForm.controls.Year.pristine || this.AddVehicleForm.controls.Engine_Fuel_Type.pristine ||
    this.AddVehicleForm.controls.Horsepower.pristine || this.AddVehicleForm.controls.Transmission.pristine ||
    this.AddVehicleForm.controls.Driven_Wheels.pristine || this.AddVehicleForm.controls.Number_of_Doors.pristine ||
    this.AddVehicleForm.controls.Market_Category.pristine || this.AddVehicleForm.controls.Vehicle_Style.pristine ||
    this.AddVehicleForm.controls.Price.pristine
  }

  isIncomplete() {
    return this.isInvalid('Make') ||
            this.isInvalid('Model') ||
            this.isInvalid('Year') ||
            this.isInvalid('Engine_Fuel_Type') ||
            this.isInvalid('Horsepower') ||
            this.isInvalid('Transmission') ||
            this.isInvalid('Driven_Wheels') ||
            this.isInvalid('Number_of_Doors') ||
            this.isInvalid('Market_Category') ||
            this.isInvalid('Vehicle_Style') ||
            this.isInvalid('Price') ||
            this.isInvalid('image_link') ||
            this.isUntouched();
  }
  refresh() {
    window.location.reload();
    this.AddVehicleForm.reset();
  }

}
