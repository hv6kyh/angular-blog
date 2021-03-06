import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import { MarkdownModule } from 'ngx-markdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { ThemeModule } from '../../@theme/theme.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from './post.service';
import { WriteComponent } from './write/write.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, WriteComponent],
  imports: [
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbInputModule,
    NbLayoutModule,
    NgxPaginationModule,
    MarkdownModule.forChild(),
  ],
})
export class PostModule {}
