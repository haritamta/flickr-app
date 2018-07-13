import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlickrComponent } from './flickr/flickr.component';

@NgModule({
  declarations: [
    FlickrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [FlickrComponent],
  bootstrap: [FlickrComponent]
})
export class AppModule { }
