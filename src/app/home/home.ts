import { Component } from '@angular/core';
import { Navigieren } from '../navigieren/navigieren';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [Navigieren],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 
}
