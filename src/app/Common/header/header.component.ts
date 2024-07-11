import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  blue!: boolean;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('blue')
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      
       if (currentUrl === '/') {
        console.log('Route is empty');
        this.blue = false;
        // Handle empty route case
      }else{
        console.log('hwllo')
this.blue = true;
console.log(this.blue)
      }
    });
  }
}
