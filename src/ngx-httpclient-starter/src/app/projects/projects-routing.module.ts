import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';


const routes: Routes = [
  {path : '', component : ProjectsComponent},
  {path : 'new', component : ProjectNewComponent},
  {path : 'list', component : ProjectListComponent},
  {path : 'details:/id', component : ProjectDetailsComponent},
  {path : 'edit/id', component : ProjectEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
