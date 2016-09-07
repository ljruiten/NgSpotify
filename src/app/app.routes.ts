import { provideRouter, RouterConfig } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const routes : RouterConfig = [
  { path: 'about', component: AboutComponent },
  { path: '', component: SearchComponent }
]

export const appRouterProviders = [
  provideRouter(routes)
];

