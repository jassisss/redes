import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'redesconnection';

  procurar: string = '';
  subscribe: string = '';

  constructor(){

  }

  ngOnInit() {
  }

  onSubmitSearch(form) {

    console.log(form.value.procurar);
    console.log(this.procurar);

    this.procurar = '';

  }

  onSubmitInscrever(form) {

    console.log(this.subscribe);

    console.log(form.value.subscribe);

  }

}
