import { Component, OnInit } from "@angular/core";
import { ProjectDataService } from "../services/project-data.service";
import { Project } from "../models/project";
import { Observable } from 'rxjs';

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"]
})
export class ProjectListComponent implements OnInit {
  projects:Observable<Project[]>;

  constructor(private ds: ProjectDataService) {}

  ngOnInit() {
  //  this.projects = this.ds.list().subscribe();
  }
}
