import { Component, Input } from "@angular/core";
// @ts-ignore
import { Movie } from "../shared/Movie";

@Component({
  selector: 'output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Input()
  page: Movie[];

}
