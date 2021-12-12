import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'modifyvehicle',
  templateUrl: './modifyvehicle.component.html',
  styleUrls: ['./modifyvehicle.component.css']
})
export class modifyVehicleComponent {

    form: any;
    mongoid: any;

    constructor(public authService: AuthService, private router: Router,
        private webService: WebService, private formBuilder: FormBuilder,
        private route: ActivatedRoute) { }

    async ngOnInit() {
        await this.webService.getVehicle(this.route.snapshot.params["_id"]).then((vehicle: any) => {
            this.mongoid = vehicle.id;
            this.form = this.formBuilder.group({
                Make: [vehicle.Make],
                Model: [vehicle.Model],
                Year: [vehicle.Year],
                Engine_Fuel_Type: [vehicle.Engine_Fuel_Type],
                Horsepower: [vehicle.Horsepower],
                Transmission: [vehicle.Transmission],
                Driven_Wheels: [vehicle.Driven_Wheels],
                Number_of_Doors: [vehicle.Number_of_Doors],
                Market_Category: [vehicle.Market_Category],
                Vehicle_Style: [vehicle.Vehicle_Style],
                Price: [vehicle.Price],
                image_link: [vehicle.image_link]
            });
        });
    }

    async onSubmit() {
        await this.webService.modifyVehicle(this.form.value, this.mongoid).then(() => {
            this.router.navigate(['']);
        });
    }

}
