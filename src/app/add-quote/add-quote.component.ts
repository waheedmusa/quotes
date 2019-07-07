import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  @Input() quote: Quote;
  isComplete: any;


  constructor() { }

  ngOnInit() {
  }

}
