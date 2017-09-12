import { User } from '../domain/user';
import { TaskHistoryVM } from './history.vm';
export interface TaskVM {
  id?: string;
  taskListId: string;
  desc: string;
  completed: boolean;
  owner?: User;
  participants?: User[];
  dueDate?: Date;
  priority: number;
  // order: number;
  remark?: string;
  // tags?: string[];
  reminder?: Date;
  createDate?: Date;
  history?: TaskHistoryVM[];
}
