import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { SpinnerSize, SpinnerType } from '../../types';

@Component({
  selector: 'my-lib-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  /** Размер спиннера. */
  @Input() public size?: SpinnerSize;

  /** Тип спиннера. */
  @Input() public type?: SpinnerType;
}
