import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Waheed', 'Tread your own path you will never make it as a follow', 'Abdul'),
    new Quote('Musa', 'when there is no enemy within, the enemy outside can do us no harm ', 'Waheed'),
    new Quote('Abdul', 'If you wanna change things in a big way, you need to make big changes', 'Musa'),
   ];

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
