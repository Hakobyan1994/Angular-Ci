import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigieren } from '../navigieren/navigieren';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navigieren],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {}