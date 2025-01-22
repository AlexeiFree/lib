import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ButtonBaseDirective } from '../../directives';

@Component({
  selector: 'my-lib-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent extends ButtonBaseDirective {
  /**
   * Url иконки.
   */
  @Input() public iconSrc!: string;
}
