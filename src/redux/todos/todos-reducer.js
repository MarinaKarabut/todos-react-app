import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getAllTodosSuccess,
  addTodoSuccess,
  deleteTodoSuccess,
  toggleCompletedSuccess,
} from './todos-actions';

const initialStateTodos = [];

const todos = createReducer(initialStateTodos, {
  [getAllTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [payload, ...state],

  [deleteTodoSuccess]: (state, { payload }) => {
    console.log(payload.id);
    const newState = [...state];
    const index = newState.findIndex(todo => todo.id === payload.id);
    console.log(index);
    newState.splice(index, 1);
    return [...newState];
  },

  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo,
    ),
});

export default combineReducers({
  todos,
});
