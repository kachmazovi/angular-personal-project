import { Component, Input } from '@angular/core';
import { IMessage } from '../../../dashboard/interfaces/messages.interface';

@Component({
  selector: 'app-message-body-view',
  templateUrl: './message-body-view.component.html',
  styleUrl: './message-body-view.component.scss',
})
export class MessageBodyViewComponent {
  @Input() inbox: boolean = true;
  @Input() message: IMessage | null = null;
}
