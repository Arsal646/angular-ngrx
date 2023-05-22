import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app-state";


export const appSelector=createFeatureSelector<AppState>("myApp")
