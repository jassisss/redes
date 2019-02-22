import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
