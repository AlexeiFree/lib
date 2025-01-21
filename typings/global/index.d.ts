import { ObjectEntries } from '@my-lib/common/types/src/lib/object-entries';
import { FromEntriesWithReadOnly } from '@my-lib/common/types/src/lib/from-entries';

declare global {
  interface ObjectConstructor {
    keys<T extends object>(o: T): (keyof T)[];
    entries<T extends object>(o: T): ObjectEntries<T>;
    fromEntries<T>(obj: T): FromEntriesWithReadOnly<T>;
  }

  interface ReadonlyArray<T> {
    includes<U>(x: U & (T & U extends never ? never : unknown)): boolean;
  }

  interface KeyboardEvent {
    target: HTMLElement;
  }

  interface FocusEvent {
    target: HTMLElement;
  }

  interface PointerEvent {
    target: HTMLElement;
  }

  interface HTMLElementEventMap extends Record<`${KeyboardEventName}.${Key}`, KeyboardEvent> {}
}

type KeyboardEventName = 'keydown' | 'keyup';

type Key = 'space' | 'enter';
