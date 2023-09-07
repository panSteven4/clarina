import { CanDeactivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {isFormDirtyService} from "./services/is-form-dirty.service";
import {map, Observable, Subscription} from "rxjs";

export const leaveGuard: CanDeactivateFn<Observable<boolean>> = (component, currentRoute, currentState, nextState) => {
  const isFormDirtyServ:isFormDirtyService = inject(isFormDirtyService);
  console.log('leaveGuard')
  return isFormDirtyServ.isFormDirty$.pipe(map(isFormDirty => {
    console.log('leaveGuard isFormDirty', isFormDirty)
    if(isFormDirty){
      return confirm(" leaveGuard isFormDirty");
    }
    else return true;
  }));
};
