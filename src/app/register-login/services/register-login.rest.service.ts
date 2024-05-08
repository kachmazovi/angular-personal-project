import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginUser, IUserData } from '../interfaces/register.interface';
import { Observable, of, switchMap, tap } from 'rxjs';
import { UserService } from '../../shared/services/user.service';

@Injectable()
export class RegisterLoginRestService {
  constructor(private http: HttpClient, private userService: UserService) {}

  public registerUSer(userData: IUserData): Observable<IUserData> {
    return this.http.post<IUserData>('http://localhost:3000/users', userData).pipe(
      tap((user) => {
        if (this.userService.allUsers.length) {
          this.userService.allUsers.push(user);
        }
      })
    )
  }

  public addMailDadaForUser(id: string) {
    return this.http.post('http://localhost:3000/messages', {
      id,
      messages: [],
    });
  }

  public loginUSer(): Observable<IUserData[]> {
    if (this.userService.allUsers.length) {
      return of(this.userService.allUsers)
    }
    return this.http.get<IUserData[]>('http://localhost:3000/users').pipe(
      tap((users) => {
        this.userService.allUsers = users;
      })
    );
  }
}
