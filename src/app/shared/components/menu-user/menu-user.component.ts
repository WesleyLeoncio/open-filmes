import { Component } from '@angular/core';
import { UserService } from "../../../modules/usuarios/service/user.service";
import { UserInfo } from "../../../modules/usuarios/models/interfaces/user-info";

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
