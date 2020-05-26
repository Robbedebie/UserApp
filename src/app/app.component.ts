import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <nav>
      <a href="#" class="chat-title">
        {{title}}
      </a>
      <a routerLink="/users">Show Users</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'UserApp';
}
