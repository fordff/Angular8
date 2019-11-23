import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { Project } from "../models/project";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable({
  providedIn: "root"
})
export class ProjectDataService {
  projects: Observable<Project[]>;
  project: Project;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Observable<Project[]>>("/projects", {
      responseType: "json"
    });
  }

  details(id: number) {
    return this.http.get<Observable<Project[]>>("/projects/" + id, {
      responseType: "json"
    });
  }

  edit(id: number) {
    return this.project;
  }
}
