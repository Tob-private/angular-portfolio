import { Component, Input } from '@angular/core';
import { ProjectType } from '../../types/project.types';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TruncatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: ProjectType;
  @Input() index!: number;
}
