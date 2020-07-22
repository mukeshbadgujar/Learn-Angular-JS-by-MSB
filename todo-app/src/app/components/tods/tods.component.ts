import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from "./../../model/Todo"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-tods',
  templateUrl: './tods.component.html',
  styleUrls: ['./tods.component.css']
})
export class TodsComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos)=>{
      this.todos = todos;
    })
  }

  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo)
  }

}
