import { Component } from '@angular/core';
import { LikeService } from './shared/services/like/like-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private likeService: LikeService){}

  title = 'Angular testing';
  likes = 0;

  like(): void {
    this.likes++;
    this.likeService.add(this.likes);
  }
}
