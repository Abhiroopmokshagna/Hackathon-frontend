import { Component, OnInit, Inject } from '@angular/core';
import { Category } from '../shared/category';
import { CategoryService } from '../services/category.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ExploreComponent implements OnInit {

  categories: Category[];
  errMess: string;

  selectedCategory: Category;

  constructor(private categoryService: CategoryService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories,
        errmess => this.errMess = <any>errmess);
  }

  onSelect(category: Category) {
    this.selectedCategory = category;
  }

}
