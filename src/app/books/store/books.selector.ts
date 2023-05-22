import { createFeatureSelector } from "@ngrx/store";
import { Books } from "./books";


export const bookSelector=createFeatureSelector<Books[]>("myBooks")
