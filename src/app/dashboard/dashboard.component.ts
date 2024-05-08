import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private userServ: UserService) {}

  public logout() {
    this.userServ.logedUser = null;
  }
}
