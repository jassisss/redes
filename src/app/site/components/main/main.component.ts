import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  contactForm: any = {
    name: null,
    email: null,
    mobile: null,
    address: null,
    service: 0
  };

  constructor() {
  }

  ngOnInit() {

    // Smooth Scroll
    $(`html,body`).animate({scrollTop: 0}, 1000);

  }

  onSubmitContact(form) {

    console.log(this.contactForm);

    console.log(form);

    form.reset()

  }


}


