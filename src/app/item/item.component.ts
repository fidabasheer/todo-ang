import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() posts:any[];
@Input() i;

@Output() nameChange= new EventEmitter();

@Output() update= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  changeName(){
 this.nameChange.emit(true)
  }
  updatename(){
    this.update.emit(true)
  }
}