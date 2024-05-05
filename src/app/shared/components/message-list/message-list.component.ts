import { Component, Input } from '@angular/core';
import { IMessage } from '../../../dashboard/interfaces/messages.interface';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent {
  @Input() messages: IMessage[] = [];
  @Input() inbox: boolean = false;

  public page: number = 1;
}
