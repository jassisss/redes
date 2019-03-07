import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Smooth Scroll
    window.scroll(0, 0);
    const div = document.getElementById('elem');
    const rect = div.getBoundingClientRect();
    $(`html,body`).animate({scrollTop: rect.top}, 1000);

  }

}
