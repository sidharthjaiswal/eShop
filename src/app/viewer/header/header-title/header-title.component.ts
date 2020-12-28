import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styles: [ './header-title.component.css ']
})
export class HeaderTitleComponent  {
 
  @Input()
     title!: string;
  constructor() { }

     ngOnInit(): void {
  }

}
