import {Injectable} from '@angular/core'
import {Geolocation} from 'ionic-native';


@Injectable()
export class LocationService{

    constructor(){
        console.log("hej");
        setTimeout(() => {this.ngAfterViewInit();}, 200);
        
    }

    ngAfterViewInit() {
        console.log("log!", Geolocation);
        let watch = Geolocation.watchPosition();
        watch.subscribe((data) => {
            console.log(data.coords.latitude);
            console.log(data.coords.longitude);
        })
    }

}