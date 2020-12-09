import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import { Project } from '../shared/project';
import { ProjectService } from '../services/project.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss'],
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
export class ProjectdetailComponent implements OnInit {

  project: Project;
  
  errMess: string;
  visibility = 'shown';


  constructor(private projectservice: ProjectService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.projectservice.getProject(params['id']); }))
    .subscribe(project => {
      this.project = project;
      this.visibility = 'shown';
    },
    errmess => this.errMess = <any>errmess);
  }

}
