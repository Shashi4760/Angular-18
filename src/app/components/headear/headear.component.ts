import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headear',
  imports: [RouterLink],
  templateUrl: './headear.component.html',
  styleUrl: './headear.component.scss'
})

export class HeadearComponent {

title = signal('Home');
}
