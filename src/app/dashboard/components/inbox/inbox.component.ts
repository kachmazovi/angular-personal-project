import { Component } from '@angular/core';
import { MessageRestService } from '../../services/message.rest.service';
import { IMessage } from '../../interfaces/messages.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent {
  public $messages = this.messageRestServ.getMessages();
  public selectedMessage$ = new BehaviorSubject<IMessage | null>(null);

  constructor(private messageRestServ: MessageRestService) {}

  public selectMessage(id: string): void {
    this.selectedMessage$.next(this.messageRestServ.getMessage(id));
    const userMessages = this.messageRestServ.messages$.value;
    const message = userMessages.find((msg) => msg.id === id);
    if (message && !message.read) {
      message.read = true;
      this.messageRestServ.readMessage(userMessages).subscribe();
    }
  }
}
