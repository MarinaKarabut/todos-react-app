import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getAllTodosRequest,
  getAllTodosSuccess,
  getAllTodosError,
  addTodoSuccess,
  deleteTodoSuccess,
  toggleCompletedSuccess,
  deleteTodoRequest,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedError,
  addTodoRequest,
  addTodoError,
} from './todos-actions';

const initialStateTodos = [];

const initialStateError = null;

const todos = createReducer(initialStateTodos, {
  [getAllTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [payload, ...state],

  [deleteTodoSuccess]: (state, { payload }) => {
    const newState = [...state];
    const index = newState.findIndex(todo => todo.id === payload.id);
    newState.splice(index, 1);
    return [...newState];
  },

  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const loading = createReducer(false, {
  [getAllTodosRequest]: () => true,
  [getAllTodosSuccess]: () => false,
  [getAllTodosError]: () => false,

  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,

  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,

  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

const error = createReducer(initialStateError, {
  [getAllTodosError]: (_, { payload }) => payload,
  [getAllTodosSuccess]: () => initialStateError,

  [addTodoError]: (_, { payload }) => payload,
  [addTodoSuccess]: () => initialStateError,

  [deleteTodoError]: (_, { payload }) => payload,
  [deleteTodoSuccess]: () => initialStateError,

  [toggleCompletedError]: () => initialStateError,
  [toggleCompletedSuccess]: () => initialStateError,
});

export default combineReducers({
  todos,
  loading,
  error,
});
