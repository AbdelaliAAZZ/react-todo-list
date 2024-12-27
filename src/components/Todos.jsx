
import Todo from './Todo';
import { useState } from 'react';

function Todos(){
    
const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", done: false },
    { id: 2, task: "Build Todo App", done: true }
]);

const [newTask,setNewTask] = useState('');

function handleAddTask(e){
  e.preventDefault();

if(!newTask.trim()) {
   alert('Task cannot be empty');
    return;
}

const neuvouTask = {
  id: Date.now(),
  task: newTask,
  done: false,
}

setTodos((previousTodos) => [...previousTodos,neuvouTask] );
setNewTask('');

}

function handleToggle (id) {
  setTodos( (previousTodo) =>
    previousTodo.map((todo) =>
      todo.id === id 
      ? {...todo, done: !todo.done} 
      : todo
    )
  );
}

function handleDeleleTask(id){
  setTodos((p) =>
  p.filter((todo) => todo.id !== id))
}

function handleUpdate(id,newitem) {
 
  todos.map((todo) =>  todo.id === id 
  ? setNewTask((i) => i = newitem)
  : todo
)
  
}

    




  return (
    <div className='todos' onSubmit={(e)=>handleAddTask(e)}>
        <form >
        <input 
        type='text'
        placeholder='Add a new task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        
        />
        <button type='submit'>Add</button>
        </form>
      {
        todos.map((item) => (
            <Todo 
            key={item.id}
            item={item}
            handleToggle= {handleToggle}
            handleDeleleTask={handleDeleleTask}
            handleUpdate = {handleUpdate}
            />
        )
        
        )
      }
    </div>
  )
}

export default Todos
