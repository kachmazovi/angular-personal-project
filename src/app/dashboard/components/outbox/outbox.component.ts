import { Component } from '@angular/core';
import { MessageRestService } from '../../services/message.rest.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrl: './outbox.component.scss',
})
export class OutboxComponent {
  public $messages = this.messageRestServ.getMessages(false);

  constructor(private messageRestServ: MessageRestService) {}
}
