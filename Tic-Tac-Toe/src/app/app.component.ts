import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  constructor(private toastr:ToastrService){}

  winMsg:string = "";
  isCross = false;
  itemArray:string[] = new Array(9).fill("empty");

  handleClick(itemNumber:number){
    if(this.winMsg){
      return this.toastr.success(this.winMsg)
    }
    if(this.itemArray[itemNumber]==='empty'){
      this.itemArray[itemNumber] = this.isCross ? 'cross': 'circle';
      this.isCross = !this.isCross;
    }
    else{
      return this.toastr.info("Already Filled")
    }
    this.checkWinner();
    if(!this.itemArray.includes('empty'))
     this.reloadGame()
  }

  reloadGame = ()=>{
    this.winMsg = "";
    this.isCross = false;
    this.itemArray = new Array(9).fill("empty");
  }

  checkWinner = ()=>{
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMsg = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMsg = `${this.itemArray[3]} won`;
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMsg = `${this.itemArray[6]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMsg = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMsg = `${this.itemArray[1]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMsg = `${this.itemArray[2]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMsg = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMsg = `${this.itemArray[2]} won`;
    }
  }

}
