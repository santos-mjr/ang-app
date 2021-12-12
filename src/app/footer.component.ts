import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

    constructor(public authService: AuthService, public router: Router) {
        
    }
}
