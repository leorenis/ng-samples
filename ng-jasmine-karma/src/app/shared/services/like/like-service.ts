import { Injectable } from '@angular/core';
import { LikeStore } from '../store/like-store';
import { LikeState } from '../../state/like-state';
import { Like } from '../../models/like-model';

@Injectable()
export class LikeService {

  constructor(private likeStore: LikeStore){}

  add(count: number): void {
    this.likeStore.defineLikeStateOnSuccess({
      like: { ...new Like(), count } as Like,
    } as LikeState);
  }

}
