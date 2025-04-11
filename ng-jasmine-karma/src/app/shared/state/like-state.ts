import { Like } from '../models/like-model';

export class LikeState {
  like: Like; // model represent the domain
  loading: boolean;
  retries: number;
  errors: any[];
}
