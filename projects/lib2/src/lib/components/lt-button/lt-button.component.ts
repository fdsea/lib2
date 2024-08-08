import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'lt-button, [lt-button]',
  template: '<ng-content></ng-content>',
  styles: [`
      :host {
        border: none;
        padding: 1em 2em;
        color: #fff;
        background-color: #007bff;
        cursor: pointer;
        transition: 0.3s ease;
      }
      :host:hover {
        background-color: #0069d9;
      }
    `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LtButtonComponent {}