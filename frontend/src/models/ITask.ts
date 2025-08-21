import {StatusEnum} from "@/enums/status.enum";

export interface ITask {
    id: string;
    task: string
    status: StatusEnum;
    priority?: number;
    dueDate?: Date;

    category_id?: string;
}

export interface ITaskUpdate extends Pick<ITask, "priority" | "task"> {}