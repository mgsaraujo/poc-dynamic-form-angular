import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddItem } from '../add-item/add-item';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-workspace-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  myForm!: FormGroup;

  addItemDefinitionComponent: AddItem = {
    inputLabel: 'Adicionar: ',
    submitName: 'Enviar'
  }



  todoList: TodoItem[] = [
    {
      title: 'Tarefa 1',
      description: 'Descrição tarefa!'
    }
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      todo: this.fb.array([this.fb.group({ todo: '' })]),
    })
  }

  addTodo(): void {
    const input = this.fb.group({ todo: '' });
    this.TodoControls.push(input);

  }

  get TodoControls(): FormArray {
    return this.myForm?.controls["todo"] as FormArray
  }
}
