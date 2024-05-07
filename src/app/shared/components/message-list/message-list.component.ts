import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMessage } from '../../../dashboard/interfaces/messages.interface';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent {
  @Input() messages: IMessage[] = [];
  @Input() inbox: boolean = false;
  @Output() viewMessage = new EventEmitter<string>();

  public page: number = 1;
}
