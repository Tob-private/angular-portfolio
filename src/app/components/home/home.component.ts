import { Component, OnInit, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsService } from '../../services/projects.service';
import { ProjectType } from '../../types/project.types';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, ProjectCardComponent, RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  projects: Array<ProjectType> = []

  constructor(public headerService: HeaderService, public projectsService: ProjectsService) {
    this.headerService.setHeaderText("Welcome to my Portfolio");
  }

  async ngOnInit() {
    await this.projectsService.fetchProjects()
    this.projects = this.projectsService.projects
    this.projects = this.projectsService.shuffleProjects(this.projects)
    this.projects = this.projects.slice(0, 3)
    
  }

}
