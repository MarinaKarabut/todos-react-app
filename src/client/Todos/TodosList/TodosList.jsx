import { useCallback} from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import TodosListItem from '../TodosListItem';
import { deleteTodo, toggleCompleted } from '../../../redux/todos/todos-operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './TodosList.module.scss';

function TodosList({ todos }) {
    const dispatch = useDispatch()

    const errorCode = useSelector(state => state.todos.error, shallowEqual)
    console.log(errorCode);

    const onDeletePost = useCallback((id) => {
        dispatch(deleteTodo(id))
        if (!errorCode) {
            const message = 'Congratulations! Todo removed'
            toast(
                message,
                { position: toast.POSITION.TOP_RIGHT },
            )
            
        }
        if (errorCode) {
            const message = 'Try later'
            toast.error(
                message,
                { position: toast.POSITION.TOP_RIGHT },
            )
        }
    }, [dispatch])

    const onToggleCompleted = useCallback((id) => dispatch(toggleCompleted(id)), [dispatch])
    
    const todoEl = todos.map(({ id, ...todo }) => <TodosListItem key={v4()} {...todo} onDelete={() => onDeletePost(id)} onToggleCompleted={ () => onToggleCompleted(id)}/>)
    
    return (
        <>
            <ul className={styles.todoList}>
                {todoEl}
            </ul>
            <ToastContainer />
        </>
    )
};

export default TodosList;
