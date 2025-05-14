import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./post-details.component.css'],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent implements OnInit {
  post: any;
  comments: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getPostById(postId).subscribe((data) => (this.post = data));
    this.apiService.getCommentsByPostId(postId).subscribe((data) => (this.comments = data));
  }
}