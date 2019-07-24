import { Component, OnInit } from '@angular/core';

import { GlobalTrendsService } from '../../services/global-trends.service';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-location-trends',
  templateUrl: './location-trends.component.html',
  styleUrls: ['./location-trends.component.css']
})
export class LocationTrendsComponent implements OnInit {

  loc: FormGroup;
  tweets: any;
  component: 'Location Based Trends';

  constructor(private _globalService: GlobalTrendsService, private _form: FormBuilder, public snackbar: MatSnackBar) {
    this.createForm()
   }

  ngOnInit() {
  }


  createForm() {
    this.loc = this._form.group({
      content: new FormControl
    });
  }

  onSubmit() {
    const snackbarRef = this.snackbar.open('Grabbing Tweets...');
    console.log(this.loc.value)
    this._globalService.getLocalTrending(this.loc.value).subscribe((val: any) => {
      this.tweets = val;
      console.log( 'Data was returned' );
      snackbarRef.dismiss()
    });
  }

}
