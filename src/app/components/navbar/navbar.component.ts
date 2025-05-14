import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Adicione RouterModule aqui
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Corrigido de "styleUrl" para "styleUrls"
})
export class NavbarComponent {}