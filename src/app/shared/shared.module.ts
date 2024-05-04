import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyInputDirective } from './directives/my-input.directive';
import { MyBtnDirective } from './directives/my-btn.directive';
import { ErrMsgComponent } from './components/err-msg/err-msg.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    MyInputDirective,
    MyBtnDirective,
    ErrMsgComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    ReactiveFormsModule,
    MyInputDirective,
    MyBtnDirective,
    ErrMsgComponent,
  ],
})
export class SharedModule {}
