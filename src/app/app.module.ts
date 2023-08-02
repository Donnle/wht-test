import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";

import {AnimalState} from "../ngxs/state/animal.state";
import {BreedsState} from "../ngxs/state/breeds.state";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CardsComponent} from './shared/components/cards/cards.component';
import {CardComponent} from './shared/components/cards/card/card.component';
import {HomePageComponent} from './shared/pages/home-page/home-page.component';
import {FiltersComponent} from './shared/components/filters/filters.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {LoaderInterceptor} from "./core/interceptors/loader.interceptor";
import {LoaderComponent} from './shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    HomePageComponent,
    FiltersComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([AnimalState, BreedsState], {
      developmentMode: true
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
