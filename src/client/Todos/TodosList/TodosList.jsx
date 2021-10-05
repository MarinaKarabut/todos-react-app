import { useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import TodosListItem from '../TodosListItem';
import {deleteTodo, toggleCompleted} from '../../../redux/todos/todos-operations';

import styles from './TodosList.module.scss';

function TodosList({ todos }) {
    const dispatch = useDispatch()

    const onDeletePost = useCallback((id) => dispatch(deleteTodo(id)), [dispatch])

    const onToggleCompleted = useCallback((id) => dispatch(toggleCompleted(id)), [dispatch])
    
    const todoEl = todos.map(({ id, ...todo }) => <TodosListItem key={v4()} {...todo} onDelete={() => onDeletePost(id)} onToggleCompleted={ () => onToggleCompleted(id)}/>)
    
    return (
        <ul className={styles.todoList}>
            {todoEl}
        </ul>
    )
};

export default TodosList;
