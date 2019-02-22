import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const div = document.getElementById('elem');
    const rect = div.getBoundingClientRect();
    window.scrollBy({
      top: rect.top,
      left: 0,
      behavior: 'smooth'
    });
  }

}
