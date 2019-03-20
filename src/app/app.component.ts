import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public pages = [
    { name: 'Home', icon: 'home', path: '/home' },
    { name: 'Explorar', icon: 'search', path: '/explorar' },
    { name: 'Compras', icon: 'appstore', path: '/compras' },
    { name: 'Cuenta', icon: 'person', path: '/cuenta' },
    { name: 'Ajustes', icon: 'settings', path: '/ajustes' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToPage(page) {
    this.router.navigate([page.path]);
  }
}
