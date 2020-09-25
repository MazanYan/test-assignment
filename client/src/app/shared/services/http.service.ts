import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
// @ts-ignore
import { Movie } from '../Movie';

@Injectable()
export class HttpService {

  private page = new BehaviorSubject([]);
  sharedPage = this.page.asObservable();

  constructor(private http: HttpClient){ }

  getData(page: number, orderBy: string = '', order: string = ''){
    return this.http.get(`movies/${page}?orderBy=${orderBy}&order=${order}`)
      .subscribe((newPage: Movie[]) => this.page.next(newPage));

  }
}
