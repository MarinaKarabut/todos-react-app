import {useState, useEffect} from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { fetchTodos } from '../../../redux/todos/todos-operations';
import TodosList from '../../Todos/TodosList';
import Button from '../../../shared/components/Button';
import Modal from '../../../shared/components/Modal';
import NewTodo from '../../Todos/NewTodo';
import Section from '../../../shared/components/Section';

import styles from './TodosPage.module.scss';

const TodosPage = () => {
    const todosList = useSelector(state => state.todos.todos, shallowEqual).slice(0, 10)

    const [openModal, setOpenModal] = useState(false)
    
    const toggleModal = () => {
    setOpenModal(!openModal)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])


    return (
        <Section>
            <div className={ styles.container}>
                <Button onClick = { toggleModal }>Create a new todo</Button>
                <TodosList todos={todosList} />
                {openModal && (<Modal onClose = { toggleModal }><NewTodo/></Modal>)}
            </div> 
        </Section>
    )
};

export default TodosPage;
