import { Component, inject, Signal } from '@angular/core';
import { Theme } from '../theme/theme';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  imports: [RouterLink],
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
