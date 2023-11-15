import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
      this.router.navigate(['/filmes'])
      console.log(this.userService.getUserLoginInfor());
  }


  logout(): void{
    this.userService.logout();
  }


}
