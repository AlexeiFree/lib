import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import type { AnchorElementTarget } from '@my-lib/common/types';
import type { SpinnerType } from '@my-lib/components/spinner';

import type {
  ButtonColor,
  ButtonIconPosition,
  ButtonOuterBackground,
  ButtonProps,
  ButtonSize,
  ButtonType,
} from '../../types';
import { isButtonLoading } from '../../utils';

@Component({
  selector: 'my-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements ButtonProps {
  /** Url кнопки. */
  @Input() public href?: string;

  /** Контекст отображения для связанного документа. */
  @Input() public target?: AnchorElementTarget;

  /** Состояние интерактивности. */
  @Input() public disabled?: boolean;

  /** Поведение кнопки в форме по умолчанию */
  @Input() public type?: ButtonType;

  /** Состояние загрузки. */
  @Input() public loading?: boolean;

  /** Url иконки. */
  @Input() public iconSrc?: string;

  /** Текст кнопки. */
  @Input() public text?: string;

  /** Размещение иконки относительно текста. */
  @Input() public iconPosition?: ButtonIconPosition;

  /** Цвет спиннера. */
  @Input() public spinnerType?: SpinnerType;

  /** Цвет кнопки. */
  @Input() public color?: ButtonColor;

  /** Цвет окружающего фона кнопки. Влияет на цвет кнопки. */
  @Input() public outerBackground?: ButtonOuterBackground;

  /** Размер кнопки. */
  @HostBinding('attr.size') @Input() public size?: ButtonSize;

  /** Растягивает кнопку на всю ширину. */
  @HostBinding('attr.fluid') @Input() public fluid?: boolean;

  public get isLoading(): boolean {
    return isButtonLoading(this);
  }
}
