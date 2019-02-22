import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

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
