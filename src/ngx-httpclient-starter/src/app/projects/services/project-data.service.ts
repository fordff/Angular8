import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable({
  providedIn: "root"
})
export class ProjectDataService {
  projects: Project[];
  project: Project;

  constructor(private httpClient: HttpClientModule) {}

  list() {
    return this.projects;
  }

  details(id: number) {
    return this.project;
  }

  edit(id: number) {
    return this.project;
  }
}
