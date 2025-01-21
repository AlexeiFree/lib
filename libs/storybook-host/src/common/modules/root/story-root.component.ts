import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { ThemeService } from '@my-lib/common/services';
import type { Theme } from '@my-lib/common/types';

@Component({
  selector: 'my-lib-story-root',
  templateUrl: './story-root.component.html',
  styleUrls: ['./story-root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StoryRootComponent {
  @Input() public set theme(value: Theme) {
    this.themeService.updateTheme(value);
  }

  @Input() public bgColor = 'transparent';

  constructor(public readonly themeService: ThemeService) {}
}
