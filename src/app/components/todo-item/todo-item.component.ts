import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/model/todo-model';
import { actions } from 'src/app/providers/todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  

  @Input() todo?: TodoModel ;

  editTodo:boolean = false;
  completedTodo:boolean = false;

  todoInput?: string;

  constructor(private store:Store){}
  

  ngOnInit(): void{
    //this.editTodo = this.todo!.completed;
    this.completedTodo = this.todo!.completed;
    this.todoInput = this.todo!.title;
  }

  updateToggle(){
   
  }

  updateTodo(){
    this.editTodo = !this.editTodo; //devient true
    if(this.todoInput!.trim().length>0)
    this.store.dispatch(actions.updateTodoAction({
      id: this.todo!.id,
      category: this.todo!.category,
      userId: this.todo!.userId,
      completed: this.todo!.completed,
      title: this.todoInput!.trim(),
    }))
    else{
      this.todoInput = this.todo!.title
    }

  }


  completedToggle(){
    this.completedTodo =!this.completedTodo
    this.store.dispatch(actions.updateTodoAction({
      id: this.todo!.id,
      category: this.todo!.category,
      userId: this.todo!.userId,
      completed: this.completedTodo,
      title: this.todo!.title,
    }))

  }

  deleteTodo(){
 
    this.store.dispatch(actions.deleteToAction({
      id: this.todo!.id,
      category: this.todo!.category,
      userId: this.todo!.userId,
      completed: this.todo!.completed,
      title: this.todo!.title,
    }))
    
  }

}
