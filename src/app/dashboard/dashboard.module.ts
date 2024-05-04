import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { ImportantComponent } from './components/important/important.component';
import { DeletedComponent } from './components/deleted/deleted.component';

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
      {
        path: 'important',
        component: ImportantComponent,
      },
      {
        path: 'deleted',
        component: DeletedComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
