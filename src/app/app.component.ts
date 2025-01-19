import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, PhonebookComponent, ContactItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PhoneBook';
}
