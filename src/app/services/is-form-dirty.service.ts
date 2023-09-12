import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class isFormDirtyService {
  readonly isFormDirty$: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
