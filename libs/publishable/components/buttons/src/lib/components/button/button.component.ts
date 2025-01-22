import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { ButtonBaseDirective } from '../../directives';
import type { ButtonIconPosition } from '../../types';

@Component({
  selector: 'mm-web-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ButtonBaseDirective {
  /**
   * Текст кнопки.
   */
  @Input() public text!: string;

  /**
   * Url иконки. Если задан, радом с текстом отображается иконка. Её расположение зависит от поля iconPosition.
   * @default undefined.
   */
  @Input() public iconSrc?: string;

  /**
   * Расположение иконки относительно текста. Действует при установленном iconSrc.
   * leading: Слева.
   * trailing: Справа.
   * @default 'leading'.
   */
  @Input() public iconPosition?: ButtonIconPosition;

  /**
   * Растягивает кнопку на ширину блочного родителя.
   * @default false.
   */
  @HostBinding('attr.fluid') @Input() public fluid?: boolean;
}
