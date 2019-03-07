import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Smooth Scroll
    window.scroll(0, 0);
    const div = document.getElementById('elem');
    const rect = div.getBoundingClientRect();
    $(`html,body`).animate({scrollTop: rect.top}, 1000);

  }

}
