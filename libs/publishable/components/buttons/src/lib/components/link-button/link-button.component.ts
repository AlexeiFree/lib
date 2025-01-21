import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { LinkButtonProps } from '../../types';
import { isButtonBlocked } from '../../utils';

@Component({
  selector: 'my-lib-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkButtonComponent {
  @Input() public props!: LinkButtonProps;

  public get isBlocked(): boolean {
    return isButtonBlocked(this.props);
  }
}
