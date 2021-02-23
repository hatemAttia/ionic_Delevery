import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private router: Router) { }
  ngOnInit() {}
    /**
   * Navigation
   * @param path: string; ;
   */
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
