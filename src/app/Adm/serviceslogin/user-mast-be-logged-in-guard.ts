import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { StateManagerService } from "./state-manager.service";
import { catchError, map, of } from "rxjs";

export class UserMastBeLoggedInGuard implements CanActivate{

    constructor(private router: Router, private stateManagerService: StateManagerService) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  
      return this.stateManagerService.currentUser.pipe(
        map(user => {
          if (user && user.username) {
            return true;
          } else {
            this.router.navigate(['/test']);
            return false;
          }
        }),
        catchError(() => {
          this.router.navigate(['/test']);
          return of(false);
        })
      );
    }
    
}
