import { Component, OnInit, Input } from '@angular/core';
import { GithubapiService } from 'src/app/shared/githubapi.service';
import { Users } from 'src/app/shared/users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user;

  constructor(private gitService: GithubapiService) {}

  ngOnInit(): void {}

  onSelected() {
    this.gitService.userSelected.next(this.user);
  }
}
