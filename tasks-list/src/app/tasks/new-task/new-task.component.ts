import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  // private tasksservice: TasksService;
  // constructor(tservice: TasksService) {
  //   this.tasksservice = tservice;
  // }
  constructor(private tasksservice: TasksService) {}

  onAddTask(title: string, description: string) {
    this.tasksservice.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
