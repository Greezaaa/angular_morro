import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouteStore } from '@app/stores/router/router.stare';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteWatcherService {
  constructor(private router: Router, private routeStateStore: RouteStore) {}

  initializeRouteWatcher() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const path = event.urlAfterRedirects;
        if (
          path === '/' ||
          path === '/morrocotuda' ||
          path === '/morrocotuda-txiki'
        ) {
          this.routeStateStore.setCurrentRoute(path);
        }
      });
  }
}
