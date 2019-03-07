import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Smooth Scroll
    window.scroll(0, 0);
    const div = document.getElementById('elem');
    const rect = div.getBoundingClientRect();
    $(`html,body`).animate({scrollTop: rect.top}, 1000);

  }

}
