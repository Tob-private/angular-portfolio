import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { EducationType, GoalType, InterestType, ExperienceType } from '../../types/about.types';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  educations: Array<EducationType> = []
  experiences: Array<ExperienceType> = []
  goals: Array<GoalType> = []
  interests: Array<InterestType> = []

  constructor(public headerService: HeaderService) {
    this.headerService.setHeaderText('Me and my story');
  }

  async ngOnInit() {
    const response = await fetch('assets/json/about.json');
    const json = await response.json();

    this.educations = json.education;
    this.experiences = json.experiences;
    this.goals = json.goals;
    this.interests = json.interests;
  }
}
