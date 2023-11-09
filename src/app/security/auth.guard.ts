import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import { UserService } from "../shared/service/user.service";


export const authGuard: CanActivateFn = () => {

  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);

  if(!userService.estaLogado()){
    router.navigate(['login']).finally();
  }

  return true;
};
