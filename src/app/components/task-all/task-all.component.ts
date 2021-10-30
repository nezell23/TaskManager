import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-all',
  templateUrl: './task-all.component.html',
  styleUrls: ['./task-all.component.css']
})
export class TaskAllComponent implements OnInit {

  allTasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {

    this.getAllTasks();

  }

  getAllTasks(): void {
    this.tasksService.getTasks().subscribe(response => {
      this.allTasks = response;
    });
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id).subscribe(response => {
      this.getAllTasks();
    });
  }

}
