import { Directive, HostBinding, Input } from '@angular/core';

import type { AnchorElementTarget } from '@my-lib/common/types';
import type { SpinnerType } from '@my-lib/components/spinner';

import type { ButtonColor, ButtonOuterBackground, ButtonProps, ButtonSize } from '../../types';
import { ButtonType } from '../../types';
import { isButtonLoading } from '../../utils';

@Directive()
export class ButtonBaseDirective implements ButtonProps {
  /**
   * Размер кнопки.
   * @default 'm'.
   */
  @HostBinding('attr.size') @Input() public size?: ButtonSize;

  /**
   * Цвет кнопки. Это общий пресет, который устанавливает цвет фона, текста, иконок
   * и спиннера, отображающегося в состоянии loading кнопки.
   * @default 'primary'.
   */
  @Input() public color?: ButtonColor;

  /**
   * Цвет окружающего фона кнопки. Изменяет стили color-пресетов.
   * @default undefined.
   */
  @Input() public outerBackground?: ButtonOuterBackground;

  /**
   * Заменяет цвет спиннера, заданный с помощью color-пресета.
   * @default undefined.
   */
  @Input() public spinnerType?: SpinnerType;

  /**
   * Состояние неинтерактивности. В этом состоянии кнопка не интерактивна и меняет цвет.
   * @default false.
   */
  @Input() public disabled?: boolean;

  /**
   * Состояние загрузки. В этом состоянии кнопка не интерактивна, а вместо ее содержимого отображается спиннер.
   * @default false.
   */
  @Input() public loading?: boolean;

  /**
   * Url кнопки. Если указан, кнопка ведет себя как ссылка.
   * @default undefined.
   */
  @Input() public href?: string;

  /**
   * Контекст отображения загружаемого по ссылке документа. Действует при установленном href.
   * _self: Текущий контекст отображения.
   * _blank: Новая вкладка или новое окно в зависимости от настроек браузера.
   * _parent: Родительский контекст отображения. Если родителя нет, то поведение аналогично _self.
   * _top: Самый верхний контекст просмотра, то есть контекст самого первого предка. Если предков нет, то поведение аналогично _self.
   * @default '_self'.
   */
  @Input() public target?: AnchorElementTarget;

  /**
   * Поведение кнопки в форме по умолчанию. Не действует при установленном href.
   * submit: Кнопка отправляет данные формы на сервер.
   * reset: Кнопка сбрасывает все элементы управления к их начальным значениям. Удаляет данные, введенные в форму.
   * button: Кнопка не имеет поведения по умолчанию.
   * @default 'button'.
   */
  @Input() public type?: ButtonType;

  public get isLoading(): boolean {
    return isButtonLoading(this);
  }
}
