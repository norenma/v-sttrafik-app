import {Component} from '@angular/core';
import {BusstopComponent} from './busstops/busstops.component';
import {DepartureComponent} from './departures/departures.component';


@Component({
    templateUrl: 'build/pages/main.html',
    directives: [DepartureComponent, BusstopComponent]

})
export class MainComponent{


}