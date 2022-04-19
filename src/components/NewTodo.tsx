import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor='text'>TodoText</label>
      <input type='text' id='text' ref={todoTextRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
