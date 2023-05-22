import { createReducer, on } from "@ngrx/store";
import { Books } from "./books";
import { CreateBookSuccess, bookApiSuccess } from "./books.action";

export const initialState:ReadonlyArray<Books>=[];

export const bookReducer=createReducer(
    initialState,
    on(bookApiSuccess,(state,{allBooks})=>{
        return allBooks
    }),
    on(CreateBookSuccess,(state,{response})=>{
        let newState=[...state]
        newState.unshift(response)
        return newState
    })
)
