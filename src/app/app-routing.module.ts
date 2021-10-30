import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskAllComponent } from './components/task-all/task-all.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskAllComponent},
  {path: 'tasks/add', component: TaskAddComponent},
  {path: 'tasks/edit/:id', component: TaskEditComponent},
  {path: 'tasks/:id', component: TaskDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
