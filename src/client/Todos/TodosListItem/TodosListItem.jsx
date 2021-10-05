import PropTypes from 'prop-types'

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

TodosListItem.defaultProps = {
    title: '',
    completed: false,
    onDelete: () => { },
    onToggleCompleted: () => { }
}


TodosListItem.propTypes = {
    title: PropTypes.string,
    completed: PropTypes.bool,
    onDelete: PropTypes.func,
    onToggleCompleted: PropTypes.func,
}
