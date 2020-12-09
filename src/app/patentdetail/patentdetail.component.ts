import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import { Patent } from '../shared/patent';
import { PatentService } from '../services/patent.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-patentdetail',
  templateUrl: './patentdetail.component.html',
  styleUrls: ['./patentdetail.component.scss'],
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
export class PatentdetailComponent implements OnInit {

  patent: Patent;
  
  errMess: string;
  visibility = 'shown';


  constructor(private patentservice: PatentService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.patentservice.getPatent(params['id']); }))
    .subscribe(patent => {
      this.patent = patent;
      this.visibility = 'shown';
    },
    errmess => this.errMess = <any>errmess);
  }

}
