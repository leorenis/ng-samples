import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UniqueService } from './../../services/unique-service/unique-service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { LikeStore } from '../../services/store/like-store';
import { LikeState } from '../../state/like-state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit, OnDestroy {
  @Input() public id: string;
  @Input() public likes;
  @Output() public liked = new EventEmitter<void>();
  public fonts = { faThumbsUp };
  likeSubscription$: Subscription;

  constructor(
    private likeStore: LikeStore,
    private uniqueService: UniqueService,
  ) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueService.getUniqueIdWithPrefix('like-widget');
    }
    this.likeObserver();
  }

  ngOnDestroy(): void {
    this.likeSubscription$?.unsubscribe();
  }

  like(): void {
    this.liked.emit();
  }

  private likeObserver(): void {
    this.likeStore.getLike().subscribe((state: LikeState) => {
      console.log(state);
    });
  }

}
