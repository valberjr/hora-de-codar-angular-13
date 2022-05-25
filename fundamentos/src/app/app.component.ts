import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-13-curso';

  userName = 'Viviane';
  userData = {
    email: 'viviane@email.com',
    role: 'admin',
  };
}
