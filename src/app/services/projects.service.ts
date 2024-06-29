import { Injectable } from '@angular/core';
import { ProjectType } from '../types/project.types';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Array<ProjectType> = []


  async fetchProjects() {
    try {
      const response = await fetch('assets/json/projects.json');
      const json = await response.json();
      this.projects = json.projects;
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }
  shuffleProjects(projects: Array<ProjectType>) {
    let m = projects.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = projects[m];
      projects[m] = projects[i];
      projects[i] = t;
    }

    return projects;
  }
}