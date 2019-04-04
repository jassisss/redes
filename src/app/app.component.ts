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
  checkado: boolean = true;

  constructor(){

  }

  ngOnInit() {
  }

  onSubmitSearch(form) {

    console.log(form.value.procurar);
    console.log(this.procurar);

    this.checkado = false;

    this.procurar = '';

  }

  onSubmitInscrever(form) {

    console.log(this.subscribe);

    console.log(form.value.subscribe);

  }

  searchChecked() {
      this.checkado = !this.checkado;
  }
}
