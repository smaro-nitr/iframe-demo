import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  url : string;
  data : any;

  constructor(){}

  ngOnInit() {
    this.data = [
      {
        "title" : "Hollywood",
        "description" : "International Movie",
        "link" : "https://en.wikipedia.org/wiki/Hollywood"
      },
      {
        "title" : "Bollywood",
        "description" : "Indian Movie",
        "link" : "https://en.wikipedia.org/wiki/Bollywood"
      },
      {
        "title" : "Ollywood",
        "description" : "Odia Movie",
        "link" : "https://en.wikipedia.org/wiki/Cinema_of_Odisha"
      }
    ]

    this.data.forEach(element => {
      if(element.link && !this.url){
        this.url = element.link;
      }
    });
    
  }

  switchTo(page){
    this.url = "";
    this.data.forEach(element => {
      if(element.title === page && this.url === ""){
        this.url = element.link;
      }
    });
  }

}
