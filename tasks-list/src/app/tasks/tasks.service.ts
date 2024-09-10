import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "./logging.service";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = signal<Task[]>([]);
    private loggingService = inject(LoggingService);
    readtasks = this.tasks.asReadonly();
    addTask(taskinfo : {title : string, description: string}) {
        const newTask: Task = {
            id: Math.random().toString(),
            status: 'OPEN',
            ...taskinfo
        };
        this.tasks.update(oldtasks => [...oldtasks, newTask])
        this.loggingService.log(`Task with title ${newTask.title} has been added`);
    }
    updateTasksStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update(oldtasks => oldtasks.map(task => {
            if (task.id === taskId) {
                return {...task, status: newStatus};
            }
            return task;
        }));
        this.loggingService.log(`Task with id ${taskId} has been updated with status ${newStatus}`);
    }
}