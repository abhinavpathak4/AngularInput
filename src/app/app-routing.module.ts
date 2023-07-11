import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './components/data-list/data-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path: '', component : HomeComponent},
{ path: 'db-data', component: DataListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
