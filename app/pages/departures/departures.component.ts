import {Component} from '@angular/core'
import {DeparturesService} from './departures.service';

@Component({
    templateUrl: 'build/pages/departures/departures.component.html',
    selector: 'departures'
})

export class DepartureComponent{ 
    constructor(private departures:DeparturesService) {
        console.log('departures', departures)
    }
}
