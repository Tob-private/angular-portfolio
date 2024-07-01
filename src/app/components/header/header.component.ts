import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerText$: string = "";
  private headerTextSubscription: Subscription = new Subscription;

  constructor(private headerTextService: HeaderService) {}

  ngOnInit(): void {
    this.headerTextSubscription = this.headerTextService.headerText$.subscribe(
      (text: string) => {
        this.headerText$ = text;
      }
    );
    
}
ngOnDestroy(): void {
  if (this.headerTextSubscription) {
    this.headerTextSubscription.unsubscribe();
  }
}

}
