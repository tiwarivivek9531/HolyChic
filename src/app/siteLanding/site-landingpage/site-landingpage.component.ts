import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-site-landingpage',
  templateUrl: './site-landingpage.component.html',
  styleUrls: ['./site-landingpage.component.scss'],
})
export class SiteLandingpageComponent {
  counter: number = 0;

  counterStop: any = setInterval(() => {
    this.counter++;
  }, 5);
  check: boolean = true;

  x = 1;
  xequals1() {
    this.x = 1;
    console.log('hi');
  }
  xequals2() {
    this.x = 2;
    console.log('hi');
  }
  options = [
    { value: 1, label: 'Chennai' },
    { value: 2, label: 'Bengaluru' },
    { value: 3, label: 'Delhi' },
    // Add more options as needed
  ];
  selectedOption: any;

  options2 = [
    { value: 1, label: '600014' },
    { value: 2, label: '600015' },
    { value: 3, label: '600016' },

    // Add more options as needed
  ];

  z = 1;
  cities() {
    this.z = 1;
    setTimeout(() => {
      $('.chosen-select').niceSelect();
    }, 100);
  }

  pincodes() {
    this.z = 2;
    setTimeout(() => {
      $('.chosen-select').niceSelect();
    }, 100);
  }
}
