import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any;

  title = 'Contacts-Management';

  GetSingleData(data:any) {
    this.data = data;
  }
}
