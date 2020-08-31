import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../shared/search.service';
import { Subject } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { GithubapiService } from 'src/app/shared/githubapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private apiService: GithubapiService
  ) {}

  ngOnInit(): void {
    this.onSearchUser();
  }

  onSearchUser() {
    this.searchTerm
      .pipe(
        map((e: any) => {
          console.log(e.target.value);
          return e.target.value;
        }),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((term) => {
          return this.searchService._searchUsers(term);
        }),
        catchError((e) => {
          console.log(e.message);
          return e.message;
        })
      )
      .subscribe((users) => {
        this.apiService.searchedResult.next(users);
        console.log(users);
      });
  }
}
