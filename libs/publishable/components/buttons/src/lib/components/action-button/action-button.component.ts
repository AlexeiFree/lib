import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { ActionButtonProps } from '../../types';
import { isButtonBlocked } from '../../utils';

@Component({
  selector: 'my-lib-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonComponent {
  @Input() public props!: ActionButtonProps;

  public get isBlocked(): boolean {
    return isButtonBlocked(this.props);
  }
}
