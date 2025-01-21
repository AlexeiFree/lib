import { NgModule } from '@angular/core';

import { CssUrlPipe } from './css-url.pipe';

@NgModule({
  declarations: [CssUrlPipe],
  exports: [CssUrlPipe],
})
export class CssUrlModule {}
