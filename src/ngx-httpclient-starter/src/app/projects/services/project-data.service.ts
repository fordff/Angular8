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
  projects: Project[];
  project: Project;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get("/projects", { responseType: "json" }).pipe();
  }

  details(id: number) {
    return this.project;
  }

  edit(id: number) {
    return this.project;
  }
}
