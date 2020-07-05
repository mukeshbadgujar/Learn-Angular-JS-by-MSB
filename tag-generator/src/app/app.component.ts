import { Component } from '@angular/core';
import arrTag from "./../utils/tags"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tag-generator';

  tags = ''
  limit = 10

  handleChange(newLimit:number){
    this.limit = newLimit
  }

  generateTag(){
    this.tags = arrTag.slice(0, this.limit).join(" ")
  }

}
