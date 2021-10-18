import { Component, Input, OnInit } from '@angular/core';
import { AddItem } from './add-item';

@Component({
  selector: 'app-workspace-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Input()
  addItemDefinition!: AddItem;

  constructor() { }

  ngOnInit(): void {
  }

}
