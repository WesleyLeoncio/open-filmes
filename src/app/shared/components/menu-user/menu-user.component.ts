import { Component } from '@angular/core';
import { UserService } from "../../service/user.service";
import { UserInfo } from "../../../models/interfaces/user-info";

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent {

  userInfo!: UserInfo;

  constructor(
    private userService: UserService,
  ) {
    this.userInfo = this.userService.getUserLoginInfor();
  }


  logout(): void {
    this.userService.logout();
  }
}
