import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import { Member } from '../shared/member';
import { MemberService } from '../services/member.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-memberdetail',
  templateUrl: './memberdetail.component.html',
  styleUrls: ['./memberdetail.component.scss'],
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
export class MemberdetailComponent implements OnInit {

  member: Member;
  
  errMess: string;
  visibility = 'shown';


  constructor(private memberservice: MemberService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.memberservice.getMember(params['id']); }))
    .subscribe(member => {
      this.member = member;
      this.visibility = 'shown';
    },
    errmess => this.errMess = <any>errmess);
  }

}
