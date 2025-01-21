import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgModule } from '@my-lib/components/svg';

import { SpinnerComponent } from './components';

@NgModule({
  imports: [CommonModule, SvgModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
