import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueService } from '../../services/unique-service/unique-service';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeStore } from '../../services/store/like-store';
import { LikeService } from '../../services/like/like-service';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [LikeWidgetComponent],
  providers: [
    LikeStore,
    LikeService,
    UniqueService,
  ],
})
export class LikeWidgetModule {}
