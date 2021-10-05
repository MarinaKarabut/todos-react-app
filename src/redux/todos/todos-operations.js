import axios from 'axios';

import {
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
} from './todos-actions';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchTodos = () => async dispatch => {
  dispatch(getAllTodosRequest());

  try {
    const { data } = await axios.get('/todos');
    dispatch(getAllTodosSuccess(data));
  } catch (error) {
    dispatch(getAllTodosError(error.message));
  }
};

export const addTodo = body => async dispatch => {
  dispatch(addTodoRequest());
  try {
    const { data } = await axios.post('/todos', body);
    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoError(error.message));
  }
};

export const deleteTodo = id => async dispatch => {
  dispatch(deleteTodoRequest());
  try {
    const { data } = await axios.get(`/todos/${id}`);
    dispatch(deleteTodoSuccess(data));
  } catch (error) {
    dispatch(deleteTodoError(error.message));
  }
};

export const toggleCompleted = (id, body) => async dispatch => {
  dispatch(toggleCompletedRequest());
  try {
    const { data } = await axios.put(`/todos/${id}`, body);
    console.log(data);
    dispatch(toggleCompletedSuccess(data));
  } catch (error) {
    dispatch(toggleCompletedError(error.message));
  }
};
