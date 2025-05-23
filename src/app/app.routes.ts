import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

export const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];