import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  downvote=0;
upvote=0

voteDown(){
  this.downvote=this.downvote+1;
}

voteUp(){
  this.upvote=this.upvote+1;
}



  constructor() { }

  ngOnInit() {
  }

}
