import Button from '../../../shared/components/Button';

import styles from './TodosListItem.module.scss';

const TodosListItem = ({ title, completed, onDelete, onToggleCompleted }) => {
    return (
        <li className={styles.todoItem}>
            <div className={styles.todoWrapper}>
                <p className={styles.todoTitle}>{title}</p>
                <div className={ styles.todoBtnWrapper}>
                    <input className={ styles.todoCheckbox} type="checkbox" checked={ completed } onChange={ onToggleCompleted }/>
                    <Button className={styles.btnDelete} onClick={ onDelete }>Delete</Button> 
                </div>
            </div>
        </li>
    )
};

export default TodosListItem;
