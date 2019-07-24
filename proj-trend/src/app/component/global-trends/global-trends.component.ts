import { Component, OnInit } from '@angular/core';
import { GlobalTrendsService } from '../../services/global-trends.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-global-trends',
  templateUrl: './global-trends.component.html',
  styleUrls: ['./global-trends.component.css']
})

export class GlobalTrendsComponent implements OnInit {

  trends: any;

  constructor(private _globalService: GlobalTrendsService, public snackbar: MatSnackBar) { 
  }

  ngOnInit() {
    const snackbarRef = this.snackbar.open('Grabbing Tweets...', 'Ok');
    this._globalService.getGlobalTrending().subscribe((val: any) => {
      this.trends = val;
      console.log( 'Data was returned' );
      snackbarRef.dismiss();
    });
  }

}
