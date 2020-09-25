import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpService } from "../shared/services/http.service";
// @ts-ignore
import { Movie } from "../shared/Movie";

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: [HttpService]
})
export class SearchBoxComponent implements OnInit {
  orderBy: Array<Object> = [
    { value: '', viewVal: 'No Order' },
    { value: 'name', viewVal: 'Name' },
    { value: 'genre', viewVal: 'Genre' },
    { value: 'year', viewVal: 'Year' }
  ];
  order: Array<Object> = [
    { value: 'asc', viewVal: 'Ascending' },
    { value: 'desc', viewVal: 'Descending' }
  ];
  pageForm = new FormGroup({
    page: new FormControl(0),
    orderBy: new FormControl(''),
    order: new FormControl('asc')
  });

  page: Movie[];

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.httpService.sharedPage.subscribe(newPage => this.page = newPage);
  }

  onSubmit() {
    this.httpService.getData(
      this.pageForm.value.page,
      this.pageForm.value.orderBy,
      this.pageForm.value.order
    );
  }
}
