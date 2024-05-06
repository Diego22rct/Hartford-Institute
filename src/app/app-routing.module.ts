import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/not-found/not-found.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PageMentalStateExamsComponent } from './nursing/pages/page-mental-state-exams/page-mental-state-exams.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "nursing/mental-state-exams", component: PageMentalStateExamsComponent },
  { path: 'home', component: HomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
