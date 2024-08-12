import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class UxlRandomService {
  get() {
    return Math.random();
  }
}
