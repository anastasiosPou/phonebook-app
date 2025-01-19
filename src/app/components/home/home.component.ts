import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { PhonebookComponent } from '../phonebook/phonebook.component';


@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, PhonebookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
