import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  myTask: Task;
  id: number;

  constructor(private tasksService: TasksService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // get the id of the selected task
    this.id = parseInt(this.actRoute.snapshot.paramMap.get("id"));

    this.tasksService.getTaskById(this.id).subscribe(response => {
      this.myTask = response;
    });
    
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(this.id).subscribe(response => {
      this.router.navigate(['tasks']);
    });
  }

}
