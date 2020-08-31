import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../../shared/githubapi.service';
import { Subscription } from 'rxjs';
import { Users } from 'src/app/shared/users.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  users: Users[];
  // searchedUser;
  usersLoading = false;
  isError = false;
  private searchUserSubscription: Subscription;
  constructor(private apiService: GithubapiService) {}

  ngOnInit(): void {
    this.getSearchedResult();
    // this.fetchData();
  }

  // Fetch all users
  fetchData() {
    this.usersLoading = true;
    this.apiService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.usersLoading = false;
      },
      (error) => {
        this.isError = true;
        this.usersLoading = false;
      }
    );
  }

  // Get searched users
  getSearchedResult() {
    this.usersLoading = true;
    this.searchUserSubscription = this.apiService.getSearchedUser().subscribe(
      (response) => {
        console.log(response);
        if (response == null || response == undefined || response == '') {
          this.users = []; // Empty the array
          this.usersLoading = false;
          this.fetchData(); // for first time and if search field is empty
        } else {
          this.usersLoading = false;
          this.users = response; // If someting typed on search field
        }
      },
      (error) => {
        this.usersLoading = false;
        this.isError = true;
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.searchUserSubscription.unsubscribe();
  }
}
