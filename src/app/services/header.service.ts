import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private headerTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>('default header text');

    headerText$: Observable<string> = this.headerTextSubject.asObservable();

    setHeaderText = (newHeaderText: string): void => {
        this.headerTextSubject.next(newHeaderText);
    }
}