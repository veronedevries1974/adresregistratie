import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: false,
})
export class ChildComponent  implements OnInit { //child stuurt invoer naar parent
@Output() uitvoerCreate = new EventEmitter<string>();
ChildInvoerModel = '';

onChildInvoer(){ 
  console.log('Data verstuurd: ' + this.ChildInvoerModel);
  this.uitvoerCreate.emit(this.ChildInvoerModel);
  this.ChildInvoerModel = '';
}

  constructor() { }

  ngOnInit() {}

}
