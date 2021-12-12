import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  reviewForm: any;
  vehicles_list: any;
  reviews: any = [];

  constructor(private webService: WebService, 
              private route: ActivatedRoute,
              public authService: AuthService,
              private formBuilder: FormBuilder) {}

              
  async ngOnInit() {

    var response = await this.webService.getVehicle(this.route.snapshot.params['id'])
    this.vehicles_list = response;

    this.reviews = this.webService.getReviews(this.route.snapshot.params['id'])

    this.reviewForm = this.formBuilder.group( {
      username: ['', Validators.required],
      comment: ['', Validators.required],
      stars: 5
    });

  }

    async deleteVehicle(vehicle_id: any) {
      await this.webService.deleteVehicle(vehicle_id).then((vehicle) => {
        this.refresh();
      });
    } 

    onSubmit() {
      this.webService.postReview(this.reviewForm.value).subscribe( (response: any) => {
        this.reviewForm.reset();
        this.reviews = this.webService.getReviews(this.route.snapshot.params['id']);
      })
      this.reviewForm.reset();
    }

  refresh() {
    window.location.reload();
  }

  isInvalid(control: any) {
    return this.reviewForm.controls[control].invalid &&
    this.reviewForm.controls[control].touched;
  }

  isUnTouched() {
    return this.reviewForm.controls.username.pristine ||
    this.reviewForm.controls.comment.pristine;
  }

  isIncomplete() {
    return this.isInvalid('username') ||
            this.isInvalid('comment') ||
            this.isInvalid('stars') ||
            this.isUnTouched();
  }

}
