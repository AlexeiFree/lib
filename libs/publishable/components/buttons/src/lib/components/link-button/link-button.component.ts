import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { LinkButtonProps } from '../../types';
import { isButtonBlocked } from '../../utils';

@Component({
  selector: 'mm-web-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkButtonComponent {
  @Input() public props!: LinkButtonProps;

  public get isBlocked(): boolean {
    return isButtonBlocked(this.props);
  }

  public handleSpaceKeyDown(event: KeyboardEvent): void {
    event.preventDefault();
  }

  public handleSpaceKeyUp({ target }: KeyboardEvent): void {
    target.click();
  }
}
