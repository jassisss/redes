import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Smooth Scroll
    window.scroll(0, 0);
    const div = document.getElementById('elem');
    const rect = div.getBoundingClientRect();
    $(`html,body`).animate({scrollTop: rect.top}, 1000);

  }

}
