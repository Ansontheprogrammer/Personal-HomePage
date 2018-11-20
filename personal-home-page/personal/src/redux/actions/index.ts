import { PROJECT } from '../../shared/types/redux.d';

let nextTodoId = 0

export const addProject = (project: PROJECT) => ({
  id: nextTodoId++,
  project,
  type: 'ADD_PROJECT',
})
​
export const setVisibilityFilter = (filter : string) => ({
  filter,
  type: 'SET_VISIBILITY_FILTER',
})
​
export const toggleTodo = (id: number) => ({
  id,
  type: 'TOGGLE_TODO',
})
​
export const VisibilityFilters = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}