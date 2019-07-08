import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote("Waheed", "Tread your own path, you'll never make it as a follow", 'Abdul'),
    new Quote("Musa", "When there's no enemy within, the enemy outside can do us no harm", "Waheed"),
    new Quote("Abdul", "If you want to change things in a big way, you need to make big changes", "Musa"),
   ];

   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  };


   addComponent(newQuote, newAuthor, newName){
     var newTodo = {
      say: newQuote,
      author: newAuthor,
       name: newName,
     }
     this.quotes.push(newTodo);
   }


   deleteQuote(quote){
     this.quotes = this.quotes.filter(t => t.name !== quote.name);
   }



  constructor() { }

  ngOnInit() {
  }

}
