import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class Search {
  checkoutForm = this.formBuilder.group({
    date: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    // Process checkout data here
    console.log('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
  }
}
