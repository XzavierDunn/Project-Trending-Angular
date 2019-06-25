import { Component, OnInit, ErrorHandler } from '@angular/core';
import { GlobalTrendsService } from '../../services/global-trends.service';
import { MatSnackBar, MatTableDataSource, PageEvent } from '@angular/material';


@Component({
  selector: 'app-global-trends',
  templateUrl: './global-trends.component.html',
  styleUrls: ['./global-trends.component.css']
})

export class GlobalTrendsComponent implements OnInit {
  dataSource:MatTableDataSource<object>;


  trends: any;

  constructor(private _globalService: GlobalTrendsService, public snackbar: MatSnackBar) { 
  }

  ngOnInit() {
    const snackbarRef = this.snackbar.open('Grabbing Tweets...');
    this._globalService.getGlobalTrending().subscribe((val: any) => {
      this.trends = val;
      console.log( 'Data was returned' );
      snackbarRef.dismiss();
    });
  }

}
