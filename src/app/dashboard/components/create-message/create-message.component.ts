import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageRestService } from '../../services/message.rest.service';
import { IMessage } from '../../interfaces/messages.interface';
import { BehaviorSubject, tap } from 'rxjs';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.scss',
})
export class CreateMessageComponent implements OnInit {
  public createMessageForm = new FormGroup({
    receiverMail: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  public receiverUsersEmails: string[] = [];

  public receiverUsers$ = new BehaviorSubject<string[]>([]);

  constructor(
    private messageRestServ: MessageRestService,
    private userServ: UserService
  ) {}

  ngOnInit(): void {
    this.receiverUsersEmails = this.userServ.allUsers.map((user) => user.email);

    this.createMessageForm
      .get('receiverMail')
      ?.valueChanges.pipe(
        tap((email) => {
          if (email && email?.length > 3) {
            this.receiverUsers$.next(
              this.receiverUsersEmails.filter((userEmail) =>
                userEmail.includes(email)
              )
            );
          }
        })
      )
      .subscribe();
  }

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

  public selectReceiver(email: string) {
    this.createMessageForm.get('receiverMail')?.setValue(email);
    this.receiverUsers$.next([]);
  }

  public hasFormControlError(name: string): boolean {
    return (
      (this.createMessageForm.get(name)?.invalid &&
        this.createMessageForm.get(name)?.touched) ||
      false
    );
  }
}
