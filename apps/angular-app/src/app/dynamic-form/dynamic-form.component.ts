import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-workspace-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }

  @Input()
  formArray!: FormArray;
  @Input() fg: any;

  ngOnInit(): void {
  }

}
