import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from './search.service';
// import { List } from './list';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.css'],
})
export class Search {
  alert = false;
  lists: any = null;
  //   lists = [{ open: null, close: null, high: null, low: null }];
  checkoutForm = this.formBuilder.group({
    date: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  search(searchDate: string) {
    if (searchDate) {
      let response = this.searchService
        .search(searchDate)
        .subscribe((response: any) => {
          console.log(response?.data.length);
          if (response.data.length) {
            this.lists = [response?.data[0]];
            this.alert = false;
          } else {
            this.lists = null;
            this.alert = true;
          }
        });
    }
  }

  onSubmit(): void {
    // Process checkout data here
    this.search(this.checkoutForm.value);
    // this.checkoutForm.reset();
  }
}
