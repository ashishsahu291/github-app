import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubapiService } from 'src/app/shared/githubapi.service';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResults: Users[];
  constructor(private apiService: GithubapiService) {}

  searchUsers(term: string): Observable<any> {
    if (term == '') {
      console.log('Not Defined');
      return of(null);
    } else {
      return this.apiService.searchingUsers(term).pipe(
        map((response) => {
          console.log(response);
          return (this.searchResults = response['items']);
        })
      );
    }
  }

  // returns the response
  _searchUsers(term) {
    return this.searchUsers(term);
  }
}
