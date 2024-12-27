import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueService } from '../../services/unique-service/unique-service';
import { LikeWidgetComponent } from './like-widget.component';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [LikeWidgetComponent],
  providers: [UniqueService],
})
export class LikeWidgetModule {}
