import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadearComponent } from './components/headear/headear.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeadearComponent],
  template: `
   <app-headear/>
   <main>
    <router-outlet />
   </main>
  `,
  styles: ['main{ padding:16px }'],
})
export class AppComponent {
  title = 'myfirst-app';
}
