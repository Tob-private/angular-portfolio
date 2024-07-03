import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { ProjectsService } from '../../services/projects.service';
import { ProjectType } from '../../types/project.types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent implements OnInit {
  projects: Array<ProjectType> = []

  constructor(public headerService: HeaderService, public projectsService: ProjectsService) {
    this.headerService.setHeaderText("My Project Showcase")
  }

  async ngOnInit() {
    await this.projectsService.fetchProjects()
    this.projects = this.projectsService.projects
  }
}
