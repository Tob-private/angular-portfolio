import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    headerText: string = ""

    setHeaderText = (text: string): void => {
        this.headerText = text;
    }
}