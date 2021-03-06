import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ExploreComponent } from '../explore/explore.component';
import { ExploredetailComponent } from '../exploredetail/exploredetail.component';
import { MemberdetailComponent } from '../memberdetail/memberdetail.component';
import { PaperdetailComponent } from '../paperdetail/paperdetail.component';
import { PatentdetailComponent } from '../patentdetail/patentdetail.component';
import { ProjectdetailComponent } from '../projectdetail/projectdetail.component';
export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'favorites',     component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contactus',     component: ContactComponent },
  { path: 'dishdetail/:id',     component: DishdetailComponent },
  { path: 'explore', component: ExploreComponent},
  { path: 'exploredetail/:id', component: ExploredetailComponent},
  { path: 'memberdetail/:id', component: MemberdetailComponent},
  { path: 'paperdetail/:id', component: PaperdetailComponent},
  { path: 'projectdetail/:id', component: ProjectdetailComponent},
  { path: 'patentdetail/:id', component: PatentdetailComponent}
];
