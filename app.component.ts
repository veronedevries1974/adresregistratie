import { Component } from '@angular/core'; // 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false, //ngModule
})

export class AppComponent {
   invoer: string[] = []; // leeg invoerveld

  onChildInvoerCreated(nieuwItem: string) {
    this.invoer.push(nieuwItem); // push invoer naar pagina
  }
}