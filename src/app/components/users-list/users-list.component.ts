import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./users-list.component.css'],
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  users: any[] = [];
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors du chargement des utilisateurs.';
        console.error(error);
      },
    });
    
  }
}
