import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const counterInitialValue = 0;

export function counterReducer(count: number, action: Action): number {
  switch (action.type) {
    case INCREMENT:
      return count + 1;

    case DECREMENT:
      return count - 1;

    case RESET:
      return 0;

    default:
      return count;
  }
}
