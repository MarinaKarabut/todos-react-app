import {useCallback,useEffect} from 'react';
import { useDispatch} from 'react-redux'

import useForm from '../../../shared/hooks/useForm';
import Textarea from '../../../shared/components/Textarea';
import Button from '../../../shared/components/Button';
import { initialState } from './initialState';
import { fields } from './fields';
import { addTodo } from '../../../redux/todos/todos-operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './NewTodo.module.scss';

const NewTodo = () => {
    const { title } = fields

    const dispatch = useDispatch();
    
    const onSubmit = useCallback((data) => {
        dispatch(addTodo(data))
        if (data) {
            const message = 'Congratulations! Todo added'
            toast(
            message,
            { position: toast.POSITION.TOP_RIGHT },
          );
        }
    }, [dispatch]);

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });



    return (
        <>
             <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Textarea {...title} value={data.title} onChange={handleChange}></Textarea>
                    <div className={styles.btnWrapper}>
                        <Button type="submit">Create</Button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
};

export default NewTodo;
