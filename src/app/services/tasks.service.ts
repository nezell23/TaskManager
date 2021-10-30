import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  serverUrl: string = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) { }

  // get all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serverUrl);
  }

  // get one task by id
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.serverUrl}/${id}`);
  }

  // add task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.serverUrl, task);
  }

  // edit task by id
  editTask(task: Task, id: number): Observable<Task> {
    return this.http.put<Task>(`${this.serverUrl}/${id}`, task);
  }

  // delete task by id
  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.serverUrl}/${id}`);
  }

}
