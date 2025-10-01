import { DOCUMENT, effect, inject, Injectable, RendererFactory2, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  
  private renderer = inject(RendererFactory2).createRenderer(null, null);
  private document = inject(DOCUMENT);

  public darkMode = signal<boolean>(JSON.parse(localStorage.getItem('darkMode') ?? 'true'));
  public largeTextMode = signal<boolean>(JSON.parse(localStorage.getItem('largeTextMode') ?? 'false'));
  
  updateDarkClassInHTML = effect(() => {
    this.darkMode() ?
      this.renderer.addClass(this.document.body, 'dark') :
      this.renderer.removeClass(this.document.body, 'dark')
    }
  );

  updateTextSizeClassInHTML = effect(() => {
    this.largeTextMode() ?
      this.renderer.addClass(this.document.body, 'large-text-mode') :
      this.renderer.removeClass(this.document.body, 'large-text-mode')
    }
  );

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
  }

  toggleLargeTextMode() {
    this.largeTextMode.set(!this.largeTextMode());
    localStorage.setItem('largeTextMode', JSON.stringify(this.largeTextMode()));
  }  
}
