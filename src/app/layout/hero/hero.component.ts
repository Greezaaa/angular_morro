import { Component } from '@angular/core';
import { HeroLeftPartComponent } from './hero-left-part/hero-left-part.component';
import { HeroRightPartComponent } from './hero-right-part/hero-right-part.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroLeftPartComponent, HeroRightPartComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  selected: boolean = false;
}
