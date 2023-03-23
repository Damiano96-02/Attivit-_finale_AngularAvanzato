import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector } from "@ngrx/store";

export const getRouter = createFeatureSelector<any, RouterReducerState>('router');