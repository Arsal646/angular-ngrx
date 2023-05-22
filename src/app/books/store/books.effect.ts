import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store, select } from "@ngrx/store";
import { BooksService } from "../books.service";
import { CreateBookSuccess, bookAction, bookApiSuccess, createBook } from "./books.action";
import { EMPTY, map, switchMap, withLatestFrom } from "rxjs";
import { AppState } from "src/app/shared/store/app-state";
import { setAPIStatus } from "src/app/shared/store/app.action";
import { bookSelector } from "./books.selector";

@Injectable()

export class booksEffects{
    constructor(
        private action$:Actions,
        private bookService:BooksService,
        private appStore:Store<AppState>,
        private store:Store
    ){

    }

    loadAllBooks$=createEffect(()=>
        this.action$.pipe(
            ofType(bookAction),
            withLatestFrom(this.store.pipe(select(bookSelector))),
            switchMap(([,fromBookStore])=>{
                if(fromBookStore.length>0){
                    return EMPTY
                }
                return this.bookService.getBooks()
                .pipe(

                    map(data=> {

                        return bookApiSuccess({allBooks:data})
                    })
                )
            })
        )
    )


    createBook$=createEffect(()=>
        this.action$.pipe(
            ofType(createBook),
            switchMap((action)=>{
                return this.bookService.addNewBooks(action.paylaod)
                .pipe(

                    map((data)=>{
                        this.appStore.dispatch(setAPIStatus({apiStatus:{apiResponseMessage:'',apiStatus:'success'}}))
                        return CreateBookSuccess({response:data})
                    }))
            })
        )
    )
}



