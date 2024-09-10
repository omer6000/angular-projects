import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService = inject(TasksService);

  selectedFilter = signal<string>('all');
  tasks = computed(() => {
    if (this.selectedFilter() === 'all') {
      return this.tasksService.readtasks();
    }
    else if (this.selectedFilter() === 'open') {
      return this.tasksService.readtasks().filter(task => task.status === 'OPEN');
    }
    else if (this.selectedFilter() === 'done') {
      return this.tasksService.readtasks().filter(task => task.status === 'DONE');
    }
    else {
      return this.tasksService.readtasks().filter(task => task.status === 'IN_PROGRESS');
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
