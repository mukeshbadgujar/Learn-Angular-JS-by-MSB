import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  title = 'app';
  name = 'Angular-search';
  users =[
    {'full_name':'Ravi Kumar','address':'South Delhi, New Delhi','interests':'playing guitar'},
    {'full_name':'Rohit Kumar','address':'East Delhi, New Delhi','interests':'playing cricket'},
    {'full_name':'Rani Kumari','address':'West Delhi, New Delhi','interests':'singing'},
    {'full_name':'Vinita Kumari','address':'Central Delhi, New Delhi','interests':'dancing'}
  ]

  ngOnInit(): void {
  }

}
