import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.css'],
})
export class FlickrComponent implements OnInit {
  searchControl = new FormControl();
  model$: Observable<any>;
  photos: Object;

  constructor(private _formBuilder: FormBuilder, private _http: HttpClient) { }
  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((query) => query && query.replace(/\s/g, '').length ? this._http.get(query) : this._http.get('dog'))
      .subscribe(value => {
        this.photos = value;
      });
 }

}
