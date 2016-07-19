import {Component} from '@angular/core';
import {BusstopComponent} from './busstops/busstops.component';
import {DepartureComponent} from './departures/departures.component';


@Component({
    template: '<departures></departures><busstops></busstops>',
    directives: [DepartureComponent, BusstopComponent]

})
export class MainComponent{


}