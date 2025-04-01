import { Component, OnInit } from '@angular/core';


import {RouterOutlet} from '@angular/router';
import {ThemeService} from './core/services/theme.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private themeService: ThemeService) {
    iconRegistry.addSvgIcon(
      'shop_velocissimo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/shop.svg')
    );
  }

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
