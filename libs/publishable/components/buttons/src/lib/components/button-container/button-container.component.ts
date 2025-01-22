import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit } from '@angular/core';

import { fromEvent, merge, Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { DestroyService } from '@mm-web/common/services';
import type { SpinnerSize, SpinnerType } from '@mm-web/components/spinner';

import { DISABLED_EVENTS } from '../../constants';
import type { BaseButtonProps } from '../../types';
import { getSpinnerSize, getSpinnerType, isButtonBlocked, isButtonLoading } from '../../utils';

@Component({
  selector: 'mm-web-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class ButtonContainerComponent implements OnInit {
  @Input() public props!: BaseButtonProps;

  public get spinnerSize(): SpinnerSize {
    return getSpinnerSize(this.props.size);
  }

  public get isBlocked(): boolean {
    return isButtonBlocked(this.props);
  }

  public get isLoading(): boolean {
    return isButtonLoading(this.props);
  }

  public get effectiveSpinnerType(): SpinnerType {
    return this.props.spinnerType ?? getSpinnerType(this.props.color);
  }

  constructor(
    @Inject(DestroyService) private readonly destroy$: Observable<void>,
    private readonly elementRef: ElementRef<HTMLElement>,
  ) {}

  public ngOnInit(): void {
    merge(...DISABLED_EVENTS.map(eventName => fromEvent(this.elementRef.nativeElement, eventName, { capture: true })))
      .pipe(
        filter(() => this.isBlocked),
        takeUntil(this.destroy$),
      )
      .subscribe(event => {
        event.stopImmediatePropagation();
      });
  }

  public handleSpaceKeyDown({ target }: KeyboardEvent): void {
    this.activateButton(target);
  }

  public handleSpaceKeyUp({ target }: KeyboardEvent): void {
    this.deactivateButton(target);
  }

  public handleFocusOut({ target }: FocusEvent): void {
    this.deactivateButton(target);
  }

  private activateButton(element: HTMLElement): void {
    element.classList.add('active');
  }

  private deactivateButton(element: HTMLElement): void {
    element.classList.remove('active');
  }
}
