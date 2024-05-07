import { Component } from '@angular/core';
import { MessageRestService } from '../../services/message.rest.service';
import { BehaviorSubject } from 'rxjs';
import { IMessage } from '../../interfaces/messages.interface';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrl: './outbox.component.scss',
})
export class OutboxComponent {
  public $messages = this.messageRestServ.getMessages(false);
  public selectedMessage$ = new BehaviorSubject<IMessage | null>(null);

  constructor(private messageRestServ: MessageRestService) { }

  public selectMessage(id: string): void {
    this.selectedMessage$.next(this.messageRestServ.getMessage(id));
  }
}
