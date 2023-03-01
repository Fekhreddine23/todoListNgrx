import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/providers/todos.states';
import { todosSelector } from 'src/app/providers/todos.reducers';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  

  todos:  TodoModel[] = [];
  constructor(private store:Store){}


  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(){
   this.store.select(todosSelector).subscribe((state) => this.todos =  state); //ici je passe un tableau objets
  }

}
