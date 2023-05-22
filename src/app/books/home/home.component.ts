import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../store/books';
import { Store, select } from '@ngrx/store';
import { bookSelector } from '../store/books.selector';
import { bookAction } from '../store/books.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  myBooks$=this.store.pipe(select(bookSelector))
  constructor(private store:Store){

  }
  ngOnInit(): void {
    this.store.dispatch(bookAction())
  }
}
