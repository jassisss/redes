import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
