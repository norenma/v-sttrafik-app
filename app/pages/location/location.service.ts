import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'
import {Geolocation} from 'ionic-native';


@Injectable()
export class LocationService{

    private lat:number = 0;
    private lng:number = 0;

    private newLocationSource: Subject<any> = new Subject<any>()
    public newLocation$: Observable<any> = this.newLocationSource.asObservable();

    constructor(){
        console.log("hej");
        setTimeout(() => {this.ngAfterViewInit();}, 200);
    }

    ngAfterViewInit() {
        console.log("log!", Geolocation);
        let watch = Geolocation.watchPosition();
        watch.subscribe((data) => {
            this.lat = data.coords.latitude
            this.lng = data.coords.longitude 
            this.newLocationSource.next({lat: this.lat, lng: this.lng})
            console.log(data.coords.latitude);
            console.log(data.coords.longitude);
        })
    }

}