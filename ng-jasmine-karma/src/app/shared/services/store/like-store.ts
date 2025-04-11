import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LikeState } from '../../state/like-state';

@Injectable()
export class LikeStore {
  // When counter changes, all components with some Subscription would be notified
  private likeStore$ = new BehaviorSubject<LikeState>(new LikeState());

  // Get states from store


  /// Gets observable for future Subscriptions.
  getLike(): Observable<LikeState> {
    return this.likeStore$.asObservable();
  }

  /// Handle Success State.
  defineLikeStateOnSuccess(state: LikeState): void {
    this.likeStore$.next({
      ...this.likeStore$.value,
      like: {...state.like },
      loading: false,
      retries: 0,
      errors: [],
    });
  }

  /// Handle Error State.
  defineLikeStateOnError(error: any): void {
    const currentNumberRetries = this.likeStore$.value.retries;
    this.likeStore$.next({
      ...this.likeStore$.value,
      loading: false,
      retries: currentNumberRetries + 1,
      errors: [error],
    });
  }

  /// Handle specific field. E.g. retries
  discardRetriesNumber(): void {
    this.likeStore$.next({
      ...this.likeStore$.value,
      retries: 0,
    });
  }

}
