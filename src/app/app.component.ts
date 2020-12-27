import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons';
     
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eShop';
  faCartPlus = faCartPlus;
}
