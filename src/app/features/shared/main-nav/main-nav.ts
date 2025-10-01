import { Component, inject, Signal } from '@angular/core';
import { Theme } from '../theme/theme';

@Component({
  selector: 'app-main-nav',
  imports: [],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss'
})
export class MainNav {
  theme = inject(Theme);
  isDarkModeActive: Signal<boolean> = this.theme.darkMode;
  login() {}
  logout() {}
  toggleTheme() {
    this.theme.toggleDarkMode();
  }
}
