import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {BusstopComponent} from './pages/busstops/busstops.component';
import {DepartureComponent} from './pages/departures/departures.component';
import {MainComponent} from './pages/main';
import {LocationService} from './pages/location/location.service';



@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
})

export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = MainComponent;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [LocationService]);
