import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyInputDirective } from './directives/my-input.directive';
import { MyBtnDirective } from './directives/my-btn.directive';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    MyInputDirective,
    MyBtnDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
    MyInputDirective,
    MyBtnDirective
  ]
})
export class SharedModule { }
