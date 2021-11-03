import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  editTask: Task;
  id: number;

  constructor(private tasksService: TasksService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // get the id of the selected task
    this.id = parseInt(this.actRoute.snapshot.paramMap.get("id"));

    this.tasksService.getTaskById(this.id).subscribe(response => {
      this.editTask = response;
    });

  }

  saveTask(): void {
    this.tasksService.editTask(this.editTask, this.id).subscribe(response => {
      this.router.navigate(['tasks']);
      alert("Task Updated Successfully!");
    });
  }

}
