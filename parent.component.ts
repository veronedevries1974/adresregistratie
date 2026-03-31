import { Component, OnInit, Input } from '@angular/core'; //gereedschap

@Component({ //parent component
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  standalone: false, //ngModule
})
export class ParentComponent  implements OnInit { //input-functie configuratie
@Input() invoerWaarde: string[] = [];

  constructor() { }

  ngOnInit() {}

}
