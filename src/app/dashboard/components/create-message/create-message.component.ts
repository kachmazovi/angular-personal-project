import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageRestService } from '../../services/message.rest.service';
import { IMessage } from '../../interfaces/messages.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.scss',
})
export class CreateMessageComponent {
  public createMessageForm = new FormGroup({
    receiverMail: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  constructor(private messageRestServ: MessageRestService) {}

  public onSubmit() {
    const message: IMessage = {
      id: Math.random().toString(36).substr(2, 9),
      to: this.createMessageForm.get('receiverMail')?.value,
      subject: this.createMessageForm.get('subject')?.value as string,
      body: this.createMessageForm.get('body')?.value as string,
      date: new Date().toISOString(),
      read: false,
    };
    this.messageRestServ
      .createMessage(message)
      .pipe(
        tap(() => {
          this.createMessageForm.reset();
        })
      )
      .subscribe();
  }

  public hasFormControlError(name: string): boolean {
    return (
      (this.createMessageForm.get(name)?.invalid &&
        this.createMessageForm.get(name)?.touched) ||
      false
    );
  }
}
