import { Pipe, PipeTransform } from '@angular/core';

import { applyCssUrl } from '@my-lib/common/utils';

@Pipe({ name: 'mmWebCssUrl' })
export class CssUrlPipe implements PipeTransform {
  public transform(value: string): string {
    return applyCssUrl(value);
  }
}
