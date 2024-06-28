import { Component, inject } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  private headerService = inject(HeaderService);
  headerText: string = this.headerService.headerText
}
