import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import { Category } from '../shared/category';
import { CategoryService } from '../services/category.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-exploredetail',
  templateUrl: './exploredetail.component.html',
  styleUrls: ['./exploredetail.component.scss'],
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
export class ExploredetailComponent implements OnInit {

  category: Category;
  categoryIds: string[];
  prev: string;
  next: string;
  errMess: string;
  visibility = 'shown';


  constructor(private categoryservice: CategoryService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.categoryservice.getCategoryIds().subscribe(categoryIds => this.categoryIds = categoryIds);
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.categoryservice.getCategory(params['id']); }))
    .subscribe(category => {
      this.category = category;
      this.setPrevNext(category._id);
      this.visibility = 'shown';
    },
    errmess => this.errMess = <any>errmess);
  }

  setPrevNext(categoryId: string) {
    const index = this.categoryIds.indexOf(categoryId);
    this.prev = this.categoryIds[(this.categoryIds.length + index - 1) % this.categoryIds.length];
    this.next = this.categoryIds[(this.categoryIds.length + index + 1) % this.categoryIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
