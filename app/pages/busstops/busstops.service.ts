import {LocationService} from '../location/location.service'; 
import {Injectable} from '@angular/core'
import {Http} from '@angular/http';

@Injectable()
export class BusstopsService{

    
    public busstopsId = -1;
    private location; 
    constructor(private locationService:LocationService, private http:Http){
        console.log("hej busstops!");
        setTimeout(() => {this.ngAfterViewInit();}, 200);
        
    } 

    private getPath(lat, lng) {
        let path = 'https://api.vasttrafik.se/bin/rest.exe/v2/v2'
        return path + '/location.nearbystops?originCoordLat=' + lat + '&originCoordLong=' + lng + '&format=json'
    }

    ngAfterViewInit() {
        this.locationService.newLocation$.subscribe(location => {
                var response = this.http.get(this.getPath(location.lat, location.lng))
                if(response['LocationList'] && response['LocationList']['StopLocation'].length){
                    var stops = response['LocationList']['StopLocation']
                    for(var i = 0, j = stops.length; i < j; i++){
                        if(!stops[i].track){
                            this.busstopsId = stops[i].id
                            break
                        }
                    }
                }
            }
        )
    }
      
}