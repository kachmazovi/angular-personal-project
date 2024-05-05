import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterLoginRestService {
  constructor(private http: HttpClient) {}
}
