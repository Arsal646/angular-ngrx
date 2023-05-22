import { createAction, props } from "@ngrx/store";
import { Books } from "./books";



export const bookAction=createAction(
    "[Books API] Invoked Books GET API"
)

export const bookApiSuccess=createAction(
    "[Book Api] Book Get API Executed successfully",
    props<{allBooks:Books[]}>()
)


export const createBook=createAction(
    "[Books API] Book create API invoked",
    props<{paylaod:Books}>()
)

export const CreateBookSuccess=createAction(
    "[Books API] New book created successfuly",
    props<{response:Books}>()
)
