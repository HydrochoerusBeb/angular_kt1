import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataFormComponent } from './components/data-form/data-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataFormComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
