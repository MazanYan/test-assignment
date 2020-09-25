import { Component, Input } from "@angular/core";

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input()
  name = '';

  @Input()
  id = '';

  @Input()
  genres: string[] = [];

  @Input()
  year = 0;
}
