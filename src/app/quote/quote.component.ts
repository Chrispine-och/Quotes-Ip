import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor() { }
  quotes = [
    new Quote('Emmanuel chrispine', 'Emmanuel chrispin', 'pride comes before a fall'),
    new Quote('Encouragement', 'Nipsey hustle', 'Aim for the stars')
  ];
  preNum: number;
  lastNum: number;
  counter: number;


  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote);
  }

  upvote(i) {
    this.quotes[i].upvotes ++;
  }
  downvote(i) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1);
  }

  highestUpvote(){
    this.preNum = 0;
    this.lastNum = 0;

    for (this.counter = 0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum){this.preNum = this.lastNum; }
    }
    return  this.preNum;
  }

  ngOnInit(): void {
  }

}
