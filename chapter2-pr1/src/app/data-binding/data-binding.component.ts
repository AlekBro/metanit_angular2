import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name = "Tom";
  valueName = "Bill";

  constructor() { }


  count: number = 0;
  increase(): void {
    this.count++;
  }

  increaseWithEvent($event): void {
    this.count++;
    console.log($event);
  }

}
