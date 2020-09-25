import { Component } from "@angular/core";

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  orderBy: Array<Object> = [
    { value: 'noOrder', viewVal: 'No Order' },
    { value: 'name', viewVal: 'Name' },
    { value: 'genre', viewVal: 'Genre' },
    { value: 'year', viewVal: 'Year' }
  ];
  order: Array<Object> = [
    { value: 'asc', viewVal: 'Ascending' },
    { value: 'desc', viewVal: 'Descending' }
  ];
}
