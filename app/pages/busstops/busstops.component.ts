import {Component} from '@angular/core';
import {LocationService} from '../location/location.service'
import {BusstopsService} from './busstops.service';

@Component({
    templateUrl: 'build/pages/busstops/busstops.component.html',
    selector: 'busstops'
})
export class BusstopComponent{
    busstops = [{'name': 'Mossen'}, {'name': 'Pilbågsgatan'}];

    constructor(location: LocationService, busstops: BusstopsService){}

}