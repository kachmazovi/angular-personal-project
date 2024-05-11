import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMessage, IUserMessages } from '../interfaces/messages.interface';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { UserService } from '../../shared/services/user.service';

@Injectable()
export class MessageRestService {
  public messages$ = new BehaviorSubject<IMessage[]>([]);
  constructor(private http: HttpClient, private userServ: UserService) {}

  public createMessage(message: IMessage): Observable<IUserMessages> {
    const userMessages = this.messages$.value;
    const receiverUserId = this.userServ.allUsers.find(
      (user) => user.email === message.to
    )?.id;
    const receiverUserEmail = {
      ...message,
      to: null,
      from: this.userServ.logedUser?.email,
    };

    userMessages.push(message);

    return this.http
      .put<IMessage>(
        `http://localhost:3000/messages/${this.userServ.logedUser?.id}`,
        {
          id: this.userServ.logedUser?.id,
          messages: userMessages,
        }
      )
      .pipe(
        switchMap(() => {
          return this.getReceiverUserMessages(receiverUserId as string);
        }),
        tap((userMsg) => {
          const messages = userMsg.messages;
          messages.push(receiverUserEmail);
          this.createMessageForReceiverUser(
            receiverUserId as string,
            messages
          ).subscribe();
        })
      );
  }

  public getMessages(inbox = true): Observable<IMessage[]> {
    return this.http
      .get<IUserMessages>(
        `http://localhost:3000/messages/${this.userServ.logedUser?.id}`
      )
      .pipe(
        map((userMsgs) => {
          this.messages$.next(userMsgs.messages);
          return userMsgs.messages.filter(
            (message) => (message.from && inbox) || (message.to && !inbox)
          );
        })
      );
  }

  public getMessage(id: string): IMessage | null {
    return this.messages$.value.find((message) => message.id === id) || null;
  }

  private getReceiverUserMessages(userId: string): Observable<IUserMessages> {
    return this.http.get<IUserMessages>(
      `http://localhost:3000/messages/${userId}`
    );
  }

  private createMessageForReceiverUser(userId: string, messages: IMessage[]) {
    return this.http.put(`http://localhost:3000/messages/${userId}`, {
      id: userId,
      messages,
    });
  }
}
