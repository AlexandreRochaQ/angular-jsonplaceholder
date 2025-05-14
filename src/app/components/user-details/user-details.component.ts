import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./user-details.component.css'],
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  user: any;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getUserById(userId).subscribe((data) => (this.user = data));
    this.apiService.getPostsByUserId(userId).subscribe((data) => (this.posts = data));
  }
}