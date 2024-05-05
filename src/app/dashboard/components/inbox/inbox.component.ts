import { Component } from '@angular/core';
import { MessageRestService } from '../../services/message.rest.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent {
  public $messages = this.messageRestServ.getMessages();

  constructor(private messageRestServ: MessageRestService) {}
}
