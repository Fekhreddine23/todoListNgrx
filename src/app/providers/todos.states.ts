

/** tableau des taches avec id utilisateurs pour une taches  */

import { TodoModel } from "../model/todo-model";

export let todos: TodoModel[] = [
    {
      id: 1,
      userId: 1,
      title: 'Acheter du lait',
      category: 'Courses',
      completed: false
    },
    {
      id: 2,
      userId: 1,
      title: 'Appeler le médecin',
      category: 'Santé',
      completed: false
    },
    {
      id: 3,
      userId: 2,
      title: 'Faire la lessive',
      category: 'Ménage',
      completed: true
    }
  ];
  


export { TodoModel };
   