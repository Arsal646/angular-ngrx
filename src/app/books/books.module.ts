import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';
import { HttpClientModule } from  '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { booksEffects } from './store/books.effect';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("myBooks",bookReducer),
    EffectsModule.forFeature(booksEffects),
    ReactiveFormsModule
  ]
})
export class BooksModule { }
