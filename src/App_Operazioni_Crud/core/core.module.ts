import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export interface AppState {
  auth : {},
  profile : ProfileState,
  router : RouterReducerState
}

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth : authReducer,
      profile : profileReducer,
      router : routerReducer
    }
    ),
    StoreDevtoolsModule.instrument({
      name : 'ngrx project with modules',
      maxAge : 50
    }),
    StoreRouterConnectingModule.forRoot({
      routerState : RouterState.Minimal
    }),
    EffectsModule.forRoot([RouterEffects, ProfileEffects, AuthEffects])
  ],
  providers : [ProfileService, AuthService, AuthGuard,
  {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi: true}]
})
export class CoreModule { }
