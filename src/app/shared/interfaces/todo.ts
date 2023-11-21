export interface Todo {
  title: string;
  description: string;
  id: string;
  completed: boolean;
}

export type CreateTodo = Omit<Todo, 'id'>;
