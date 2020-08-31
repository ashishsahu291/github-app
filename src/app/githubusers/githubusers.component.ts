import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../shared/githubapi.service';
import { Users } from '../shared/users.model';
import { Repos } from '../shared/repos.model';

@Component({
  selector: 'app-githubusers',
  templateUrl: './githubusers.component.html',
  styleUrls: ['./githubusers.component.css'],
})
export class GithubusersComponent implements OnInit {
  selectedUser: Users[];
  selectedUserRepo: Repos[];
  isLoading = false;

  constructor(private githubService: GithubapiService) {}

  ngOnInit(): void {
    this.githubService.userSelected.subscribe((user) => {
      this.selectedUser = user;
      this.onUserSelected(user);
    });
  }

  onUserSelected(username) {
    this.isLoading = true;
    this.selectedUserRepo = [];
    if (this.selectedUser || this.selectedUserRepo == []) {
      this.githubService.getUserRepo(username.login).subscribe((repos) => {
        this.isLoading = false;
        this.selectedUserRepo = repos;
        console.log(repos);
      });
    }
  }
}
