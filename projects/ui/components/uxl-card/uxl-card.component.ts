import {ChangeDetectionStrategy, Component} from "@angular/core";
import {UxlRandomService} from "@lbaz/ui/services";
import {LtSatelliteService} from "@lbaz/lib2/services";

@Component({
  selector: '[uxl-card], uxl-card',
  template: `
      <h3 class="uxl-title">
        <ng-content select="title"></ng-content>
      </h3>
      <ng-content></ng-content>
  `,
  styleUrls: ['./uxl-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UxlCardComponent {
  constructor(
    private readonly satService: LtSatelliteService,
    private readonly randomService: UxlRandomService
  ) {
    this.satService.init();
    console.log(
      this.randomService.get()
    )
  }
}
