import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'lt-pin',
  template: ``,
  styles: [`
    :host {
      display: block;
      width: 1rem;
      height: 1rem;
      background-color: red;
      border-radius: 50%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LtPinComponent {}
