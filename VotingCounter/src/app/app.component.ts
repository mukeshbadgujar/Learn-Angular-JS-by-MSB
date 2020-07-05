import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VotingCounter';

  voteCounter: number = 0;

  //voteInc(){}

  voteInc = () => {
    this.voteCounter = this.voteCounter + 1;
  }
  voteDec = () => {
    this.voteCounter = this.voteCounter - 1;
  }
  voteReset = () => {
    this.voteCounter = 0;
  }

}
