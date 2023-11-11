import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    const logado: boolean = this.userService.estaLogado();
    if (!logado){
      this.logout();
    }
  }


  logout(): void{
    this.userService.logout();
  }


}
