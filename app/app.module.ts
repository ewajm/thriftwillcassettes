import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CdListComponent } from './cd-list.component';
import { CdComponent } from './cd.component';
import { GenrePipe } from './genres.pipe';
import { ArtistPipe } from './artists.pipe';
import { ShoppingCart } from './shopping-cart.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CdListComponent,
    CdComponent,
    GenrePipe,
    ArtistPipe,
    ShoppingCart
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
