import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { NavbarComponent } from './components/navbar/navbar.component';
import {SearchComponent} from "./components/search/search.component";
import {AboutComponent} from "./components/about/about.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  precompile: [AboutComponent, SearchComponent]
})
export class AppComponent {
  title = 'app works!';
}
