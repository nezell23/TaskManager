import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  newTask: Task = new Task();

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.tasksService.addTask(this.newTask).subscribe(response => {
      this.router.navigate(['tasks']);
    });
  }

}
