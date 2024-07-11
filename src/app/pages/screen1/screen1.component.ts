import { Component, ViewChild ,inject, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrl: './screen1.component.scss'
})
export class Screen1Component {
  active=1
	words: string[] = ['Alimentación', 'Bancos y seguros', 'Belleza y estética', 'Empresas de transporte', 'Servicios públicos', 'Servicios públicos', 'Alimentación', 'Belleza y estética', 'Alimentación', 'Bancos y seguros', 'Empresas de transporte', 'Servicios públicos'];
  currentIndex: number = 0;
  pageSize: number = 7;
  page = 4;
  open!: boolean;
  isMobile:boolean
  constructor(){
    this.isMobile = window.innerWidth <= 768;
    this.open=!this.isMobile
  }
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

  checkbox=[
    {
      text:'Actividades académicas 1,500 y de enseñanza',
      amount:1500
    },
    {
      text:'Actividades agropecuaries, pesca y anexos',
      amount:2500
    },
    {
      text:'Actividades agropecuaries, pesca y anexos',
      amount:0
    },
    {
      text:'Actividades agropecuaries, pesca y anexos',
      amount:50
    },
    {
      text:'Actividades agropecuaries, pesca y anexos',
      amount:5
    },
    {
      text:'Actividades agropecuaries, pesca y anexos',
      amount:1500
    },
    {
      text:'Actividades agropecuaries, pesca y anexos',
      amount:500
    },
    {
      text:'Actividades agropecuaries, pesca y anexos',
      amount:150
    },

  ]
  checkbok2=[
    {
      class:'Class1',
      number:123
    },
    {
      class:'Class2',
      number:123
    },
    {
      class:'Class3',
      number:123
    },
    {
      class:'Class4',
      number:123
    },
    {
      class:'Class5',
      number:123
    },
    {
      class:'Class5',
      number:123
    },
    {
      class:'Class6',
      number:123
    }
  ]
}
