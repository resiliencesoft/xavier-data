import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  words: string[] = ['Alimentación', 'Bancos y seguros', 'Belleza y estética', 'Empresas de transporte', 'Servicios públicos', 'Servicios públicos', 'Alimentación', 'Belleza y estética', 'Alimentación', 'Bancos y seguros', 'Empresas de transporte', 'Servicios públicos'];
  currentIndex: number = 0;
  pageSize: number = 7;
  
  get currentWords(): string[] {
    return this.words.slice(this.currentIndex, this.currentIndex + this.pageSize);
  }

  next(): void {
    if (this.currentIndex + this.pageSize < this.words.length) {
      this.currentIndex += 1;
    }
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }
}
