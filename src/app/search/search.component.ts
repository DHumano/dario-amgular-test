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
  lists = null;
  //   lists = [{ open: null, close: null, high: null, low: null }];
  checkoutForm = this.formBuilder.group({
    date: '',
  });
  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  search(searchTerm: string) {
    if (searchTerm) {
      this.searchService.search(searchTerm);
    }
  }

  onSubmit(): void {
    // Process checkout data here
    this.search(this.checkoutForm.value);
    // this.checkoutForm.reset();
  }
}
