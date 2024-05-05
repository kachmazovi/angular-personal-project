import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  public onSubmit() {
    console.log(this.createMessageForm.value);
  }

  public hasFormControlError(name: string): boolean {
    return (
      (this.createMessageForm.get(name)?.invalid &&
        this.createMessageForm.get(name)?.touched) ||
      false
    );
  }
}
