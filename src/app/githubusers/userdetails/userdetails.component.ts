import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/shared/users.model';
import { Repos } from 'src/app/shared/repos.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  @Input() user;
  @Input() repos;
  constructor() {}

  ngOnInit(): void {}
}
