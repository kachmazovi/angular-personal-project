import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyInputDirective } from './directives/my-input.directive';
import { MyBtnDirective } from './directives/my-btn.directive';
import { ErrMsgComponent } from './components/err-msg/err-msg.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MsgSubjPipe } from './pipes/msg-subj.pipe';
import { MsgBodyPipe } from './pipes/msg-body.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    MyInputDirective,
    MyBtnDirective,
    ErrMsgComponent,
    MessageListComponent,
    MsgSubjPipe,
    MsgBodyPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  exports: [
    ReactiveFormsModule,
    MyInputDirective,
    MyBtnDirective,
    ErrMsgComponent,
    MessageListComponent,
    MsgSubjPipe,
    MsgBodyPipe,
  ],
})
export class SharedModule {}
