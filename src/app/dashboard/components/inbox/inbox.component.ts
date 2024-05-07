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

  constructor(private messageRestServ: MessageRestService) { }

  public selectMessage(id: string): void {
    this.selectedMessage$.next(this.messageRestServ.getMessage(id));
  }
}
