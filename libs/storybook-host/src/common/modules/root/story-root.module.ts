import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoryRootComponent } from './story-root.component';

@NgModule({
  declarations: [StoryRootComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [StoryRootComponent],
  imports: [CommonModule],
})
export class StoryRootModule {}
