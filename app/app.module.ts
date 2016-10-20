import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CdListComponent } from './cd-list.component';
import { CdComponent } from './cd.component';
import { GenrePipe } from './genres.pipe';
import { ArtistPipe } from './artists.pipe';
import { ShoppingCart } from './shopping-cart.component';
import { TotalPipe } from './total.pipe';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    CdListComponent,
    CdComponent,
    GenrePipe,
    ArtistPipe,
    ShoppingCart,
    TotalPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
