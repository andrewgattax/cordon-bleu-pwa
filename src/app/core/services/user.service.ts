import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getAllUsers(): Observable<User[]> {
    return this.apiService.get<User[]>('/api/admin/users');
  }

  getUserById(id: number): Observable<User> {
    return this.apiService.get<User>(`/api/admin/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.apiService.post<User, User>('/api/admin/users', user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.apiService.put<User, User>(`/api/admin/users/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/admin/users/${id}`);
  }
}
