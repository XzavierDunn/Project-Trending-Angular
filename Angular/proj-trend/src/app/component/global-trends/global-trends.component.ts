import { Component, OnInit } from '@angular/core';
import { GlobalTrendsService } from '../../services/global-trends.service';

@Component({
  selector: 'app-global-trends',
  templateUrl: './global-trends.component.html',
  styleUrls: ['./global-trends.component.css']
})
export class GlobalTrendsComponent implements OnInit {

  trends: any;

  constructor(private _globalService: GlobalTrendsService) { }

  ngOnInit() {
    this._globalService.getGlobalTrending().subscribe((val: any) => {
      this.trends = val;
      console.log( val );
      console.log( 'Data was Returned' );
    });
  }

}
