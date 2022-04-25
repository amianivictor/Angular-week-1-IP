import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote('Start writing, no matter what. The water does not flow until the faucet is turned on.', 0, 0,'Louis LAmour',new Date(2022,3,10)),
    new Quote('Get it down. Take chances. It may be bad, but it is the only way you can do anything really good.', 0, 0,'William Faulkner',new Date(2022,3,11)),
    new Quote('The first draft is just you telling yourself the story.', 0, 0,'Terry Pratchett',new Date(2022,3,12)),
    new Quote('You do not start out writing good stuff. You start out writing crap and thinking it is good stuff, and then gradually you get better at it.', 0, 0,'Octavia E. Butler',new Date(2022,3,13)),
    new Quote('Start before you are ready.', 0, 0,'Steven Pressfield',new Date(2022,3,14))
  ];

  myarr: number[]=this.quotes.map(quote=>quote.UPVOTES)
  highest= Math.max(...this.myarr)
  isComplete: any;

  @Input()
  quote!: Quote;

  @Output() isRead = new EventEmitter<boolean>();

  UPVOTE(i: number){
    this.quotes[i].UPVOTES +=1;
  }
  DOWNVOTE(i: number){
    this.quotes[i].DOWNVOTES +=1;
  }
  goals: any;
  addNewQuote(quote:any){
    let quoteLength=this.quotes.length;
    this.quotes.push(this.quote)
  }

  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete this quote?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() { }


  ngOnInit(): void {
  }

}

