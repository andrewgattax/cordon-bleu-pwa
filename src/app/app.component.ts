import { Component, OnInit } from '@angular/core';


import {RouterOutlet} from '@angular/router';
import {ThemeService} from './core/services/theme.service';
import {LoginComponent} from './components/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    LoginComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.activeTheme$.subscribe((theme: string) => {
      document.body.className = theme; // Imposta la classe nel body
      console.log("sesso");
    });
  }


  toggleTheme() {
    const newTheme = this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }
}
