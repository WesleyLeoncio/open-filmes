import { Component } from '@angular/core';
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent {


  constructor(
    private userService: UserService,
  ) {
  }


  logout(): void {
    this.userService.logout();
  }
}
