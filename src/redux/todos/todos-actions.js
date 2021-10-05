import { createAction } from '@reduxjs/toolkit';

export const getAllTodosRequest = createAction('todos/getAllTodosRequest');
export const getAllTodosSuccess = createAction('todos/getAllTodosSuccess');
export const getAllTodosError = createAction('todos/getAllTodosError');

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodoRequest = createAction('todos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todos/deleteTodoError');

export const toggleCompletedRequest = createAction(
  'todos/toggleCompletedRequest',
);
export const toggleCompletedSuccess = createAction(
  'todos/toggleCompletedSuccess',
);
export const toggleCompletedError = createAction('todos/toggleCompletedError');

const actions = {
  getAllTodosRequest,
  getAllTodosSuccess,
  getAllTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
};

export default actions;
