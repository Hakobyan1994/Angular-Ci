import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigieren',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigieren.html',
  styleUrls: ['./navigieren.scss'],
})
export class Navigieren {
  alo = 'Mesrop';

  // Optional, falls du Route-Parameter brauchst:
  private route = inject(ActivatedRoute);
}