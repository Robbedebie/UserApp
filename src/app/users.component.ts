import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-my-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  // dependency injection
  constructor(private userService: UserService) {
  }

  // Call subscribe() to start listening for updates
  getUsers(): void {
    // polling
    timer(0, 2500)
      .subscribe(() => {
        this.userService.getUsers()
          .subscribe(data => this.users = data);
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void{
    this.selectedUser = user;
  }
  updateUser(user: User): void{
    this.userService
      .updateUser(user);
  }
}
