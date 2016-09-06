import {LocationService} from '../location/location.service'; 
import {Injectable} from '@angular/core'
import {Http} from '@angular/http';

@Injectable()
export class DeparturesService{

    constructor(private http:Http){
        console.log("hej departures!");
        setTimeout(() => {this.ngAfterViewInit();}, 200);
        
    }

    ngAfterViewInit() {
        console.log('Test', LocationService)
        
    }   

}