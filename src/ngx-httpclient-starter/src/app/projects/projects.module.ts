import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";
import { QuestionsComponent } from "./questions/questions.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NotesComponent } from "./notes/notes.component";
import { HistoryComponent } from "./history/history.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ProjectNewComponent } from "./project-new/project-new.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ProjectEditComponent } from "./project-edit/project-edit.component";

@NgModule({
  declarations: [
    ProjectsComponent,
    QuestionsComponent,
    TasksComponent,
    NotesComponent,
    HistoryComponent,
    ProjectNewComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule {}
