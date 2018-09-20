import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  url : string;

  constructor(public sanitizer: DomSanitizer){}

  ngOnInit() {
    this.url = 'https://en.wikipedia.org/wiki/Hollywood';
  }

  switchTo(page){
    if(page === "Hollywood"){
      this.url = 'https://en.wikipedia.org/wiki/Hollywood';
    }else if(page === "Bollywood"){
      this.url = 'https://en.wikipedia.org/wiki/Bollywood';
    }else{
      this.url = 'https://en.wikipedia.org/wiki/Cinema_of_Odisha';
    }
  }
}
