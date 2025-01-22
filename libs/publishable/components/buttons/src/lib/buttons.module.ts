import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CssUrlModule } from '@mm-web/common/pipes';
import { SpinnerModule } from '@mm-web/components/spinner';

import {
  ActionButtonComponent,
  ButtonComponent,
  ButtonContainerComponent,
  IconButtonComponent,
  LinkButtonComponent,
} from './components';

@NgModule({
  imports: [CommonModule, SpinnerModule, CssUrlModule],
  declarations: [
    ButtonContainerComponent,
    LinkButtonComponent,
    ActionButtonComponent,
    ButtonComponent,
    IconButtonComponent,
  ],
  exports: [ButtonComponent, IconButtonComponent],
})
export class ButtonsModule {}
