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

  public isActive = false;

  public get isBlocked(): boolean {
    return isButtonBlocked(this.props);
  }

  public handleSpaceKeyDown(event: KeyboardEvent): void {
    this.isActive = true;
    event.preventDefault();
  }

  public handleSpaceKeyUp({ target }: KeyboardEvent): void {
    target.click();
  }

  public handleFocusOut(): void {
    this.isActive = false;
  }
}
