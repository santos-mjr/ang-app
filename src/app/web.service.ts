import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

    private VehicleID: any;

    constructor(private http: HttpClient) { }
    
    /**
     * RETRIEVES ALL VEHICLES
     * 
     * @param page 
     * @returns HTTP GET REQUEST [GET]
     */
    getVehicles(page: number) {
        return this.http.get('http://localhost:5000/api/v1.0/vehicles?pn=' + page);
    }

    /**
     * RETRIEVES ONE VEHICLE
     * 
     * @param id 
     * @returns HTTP GET REQUEST [GET]
     */
    getVehicle(id: any) {
        this.VehicleID = id;
        return this.http.get(
            'http://localhost:5000/api/v1.0/vehicles/' + id).toPromise();
    }

    /**
     * DELETES ONE VEHICLE
     * 
     * @param mongoid 
     * @returns HTTP DELETE REQUEST [DELETE]
     */
    deleteVehicle(mongoid: any) {
        return this.http.delete(`http:localhost:5000/api/v1.0/vehicles/${mongoid}`).toPromise();
    }

    /**
     * ADDS A NEW VEHICLE USING A FORM 
     * 
     * @param formData 
     * @returns HTTP POST REQUEST [POST]
     */
    addVehicle(formData : any) {
        var postData = new FormData();
        postData.append("Make", formData.Make);
        postData.append("Model", formData.Model);
        postData.append("Year", formData.Year);
        postData.append("Engine_Fuel_Type", formData.Engine_Fuel_Type);
        postData.append("Horsepower", formData.Horsepower);
        postData.append("Transmission", formData.Transmission);
        postData.append("Driven_Wheels", formData.Driven_Wheels);
        postData.append("Number_of_Doors", formData.Number_of_Doors);
        postData.append("Market_Category", formData.Market_Category);
        postData.append("Vehicle_Style", formData.Vehicle_Style);
        postData.append("Price", formData.Price);
        postData.append("image_link", formData.image_link);
        return this.http.post('http://localhost:5000/api/v1.0/vehicles', postData).toPromise();
        
    }

    /**
     * MODIFIES A SPECIFIC VEHICLE
     * 
     * @param data 
     * @param id 
     * @returns HTTP PUT REQUEST [PUT]
     */
    modifyVehicle(data: any, id: any) {
        var form = new FormData();
        form.append("Make", data.$Make);
        form.append("Model", data.$Model);
        form.append("Year", data.$Year);
        form.append("Engine_Fuel_Type", data.$Engine_Fuel_Type);
        form.append("Horsepower", data.$Horsepower);
        form.append("Transmission", data.$Transmission);
        form.append("Driven_Wheels", data.$Driven_Wheels);
        form.append("Number_of_Doors", data.$Number_of_Doors);
        form.append("Market_Category", data.$Market_Category);
        form.append("Vehicle_Style", data.$Vehicle_Style);
        form.append("Price", data.$Price);
        return this.http.put('http://localhost:5000/api/v1.0/vehicles/' + id, form).toPromise();
        
    }

    /**
     * RETRIEVES ALL THE REVIEWS FOR SPECIFIC VEHICLE 
     * 
     * @param id 
     * @returns HTTP GET REQUEST [GET]
     */
    getReviews(id: any) {
        this.VehicleID = id;
        return this.http.get('http://localhost:5000/api/v1.0/vehicles/' +
        id + '/reviews');
        }

    /**
     * ADDS A NEW REVIEW IN A FORM 
     * 
     * @param review 
     * @returns HTTP POST REQUEST [POST]
     */
    postReview(review: any) {
        let postData = new FormData();
        postData.append("username", review.username);
        postData.append("comment", review.comment);
        postData.append("stars", review.stars);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
                        today.getMonth() + "-" +
                        today.getDate();
        postData.append("date", todayDate);


        return this.http.post('http://localhost:5000/api/v1.0/vehicles/' + this.VehicleID + '/reviews', postData);
    }

    deleteReview(mongoid: any, reviewid: any) {
        return this.http.put(`http://localhost:5000/api/v1.0/vehicles/${mongoid}/reviews/${reviewid}`, undefined).toPromise();

    }
    
}