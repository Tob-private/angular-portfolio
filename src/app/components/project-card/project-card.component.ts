import { Component, Input } from '@angular/core';
import { ProjectType } from '../../types/project.types';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: ProjectType;
  @Input() index!: number;
}
