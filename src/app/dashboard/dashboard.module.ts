import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { SharedModule } from '../shared/shared.module';
import { MessageRestService } from './services/message.rest.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'inbox',
        component: InboxComponent,
      },
      {
        path: 'outbox',
        component: OutboxComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, InboxComponent, OutboxComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [MessageRestService],
})
export class DashboardModule {}
