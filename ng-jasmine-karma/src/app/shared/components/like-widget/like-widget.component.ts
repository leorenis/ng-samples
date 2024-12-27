import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UniqueService } from './../../services/unique-service/unique-service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  @Input() public id: string;
  @Input() public likes;
  @Output() public liked = new EventEmitter<void>();
  public fonts = { faThumbsUp };

  constructor(
    private uniqueService: UniqueService
  ) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueService.getUniqueIdWithPrefix('like-widget');
    }
  }

  like(): void {
    this.liked.emit();
  }

}
