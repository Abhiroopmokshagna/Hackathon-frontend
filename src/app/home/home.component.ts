import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { Member } from '../shared/member';
import { Paper } from '../shared/paper';
import { Project } from '../shared/project';
import { Patent } from '../shared/patent';
import { LeaderService } from '../services/leader.service';
import { MemberService } from '../services/member.service';
import { PaperService } from '../services/paper.service';
import { ProjectService } from '../services/project.service';
import { PatentService } from '../services/patent.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  member: Member;
  project: Project;
  paper: Paper;
  patent: Patent;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;
  memberErrMess: string;
  paperErrMess: string;
  patentErrMess: string;
  projectErrMess: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    private memberservice: MemberService,
    private projectservice: ProjectService,
    private paperservice: PaperService,
    private patentservice: PatentService,
    @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errmess => this.promoErrMess = <any>errmess);
    this.leaderservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess);
    this.memberservice.getFeaturedMember()
        .subscribe(member => this.member = member,
          errmess => this.memberErrMess = <any>errmess);
    this.projectservice.getFeaturedProject()
        .subscribe(project => this.project = project,
          errmess => this.projectErrMess = <any>errmess);
    this.paperservice.getFeaturedPaper()
        .subscribe(paper => this.paper = paper,
          errmess => this.paperErrMess = <any>errmess);
    this.patentservice.getFeaturedPatent()
        .subscribe(patent => this.patent = patent,
          errmess => this.patentErrMess = <any>errmess);
  }

}
