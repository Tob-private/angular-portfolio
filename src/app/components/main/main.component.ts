import { Component, inject } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderService } from '../../services/header.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavComponent, FooterComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
