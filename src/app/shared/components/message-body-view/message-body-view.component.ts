import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMessage } from '../../../dashboard/interfaces/messages.interface';

@Component({
  selector: 'app-message-body-view',
  templateUrl: './message-body-view.component.html',
  styleUrl: './message-body-view.component.scss',
})
export class MessageBodyViewComponent implements OnChanges {
  @Input() inbox: boolean = true;
  @Input() message: IMessage | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log('Message changed', this.message);
    }
  }
}
