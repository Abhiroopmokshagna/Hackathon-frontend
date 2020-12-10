import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import { Paper } from '../shared/paper';
import { PaperService } from '../services/paper.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-paperdetail',
  templateUrl: './paperdetail.component.html',
  styleUrls: ['./paperdetail.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})
export class PaperdetailComponent implements OnInit {

  paper: Paper;
  
  errMess: string;
  visibility = 'shown';


  constructor(private paperservice: PaperService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.paperservice.getPaper(params['id']); }))
    .subscribe(paper => {
      this.paper = paper;
      this.visibility = 'shown';
    },
    errmess => this.errMess = <any>errmess);
  }


}
