import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteStore {
  private currentRoute = new BehaviorSubject<string>('');

  setCurrentRoute(path: string) {
    this.currentRoute.next(path);
  }

  getCurrentRoute() {
    return this.currentRoute.asObservable();
  }
}
