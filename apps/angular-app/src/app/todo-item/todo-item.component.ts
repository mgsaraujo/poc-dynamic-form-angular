import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-workspace-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todoItem!: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
