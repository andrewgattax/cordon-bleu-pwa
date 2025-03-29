import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme = new BehaviorSubject<string>('light'); // Default light theme
  activeTheme$ = this.activeTheme.asObservable();

  setTheme(theme: 'light' | 'dark') {
    this.activeTheme.next(theme);
  }

  getTheme(): string {
    return this.activeTheme.getValue();
  }
}
