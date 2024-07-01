import { Component } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { EducationType, GoalType, InterestType, ExperienceType, RandomFactType } from '../../types/about.types';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  educations: Array<EducationType> = []
  experiences: Array<ExperienceType> = []
  goals: Array<GoalType> = []
  interests: Array<InterestType> = []
  randomFacts: RandomFactType = []
  randomizedFact: string = ""

  generateRandomFact = (): void => {
    const randomNumber: number = Math.floor(Math.random() * this.randomFacts.length)
    this.randomizedFact = this.randomFacts[randomNumber]
    console.log(this.randomizedFact);
  }
  
  
  constructor(public headerService: HeaderService) {
    this.headerService.setHeaderText('Me and my story');
  }

  async ngOnInit() {
    const response = await fetch('assets/json/about.json');
    const json = await response.json();

    ({ educations: this.educations, experiences: this.experiences, goals: this.goals, interests: this.interests, randomFacts: this.randomFacts } = json);
    this.generateRandomFact()
  }
}
