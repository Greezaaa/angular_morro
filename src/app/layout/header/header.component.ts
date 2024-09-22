import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteStore } from '@app/stores/router/router.stare';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  router: string = '';

  constructor(private routerStore: RouteStore) {}
  ngOnInit() {
    this.routerStore
      .getCurrentRoute()
      .subscribe((result) => (this.router = result));
  }
}
