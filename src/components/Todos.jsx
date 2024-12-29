
import Todo from './Todo';
import { useState } from 'react';

function Todos(){
    
const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", done: false },
    { id: 2, task: "Build Todo App", done: true }
]);

const [newTask,setNewTask] = useState('');
const [sortedBy , setSortedBy] = useState('input')


//Add todo function
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

// delete todo Function

function handleDeleleTask(id){
  setTodos((p) =>
  p.filter((todo) => todo.id !== id))
}

// Update task function

function handleUpdate(id,newTask) {
 setTodos((previous) => 
previous.map(
  todo => todo.id === id 
  ? {...todo,task : newTask}
  : todo
)
)

}

// sort todos logic

let sortedTodos;

if(sortedBy === "input")
  sortedTodos = todos;
if(sortedBy === "checked")
  sortedTodos = todos.slice()
  .sort((a,b) => Number(a.done) - Number(b.done))
if(sortedBy === 'alphabet')
  sortedTodos = todos.slice()
  .sort((a,b) => a.task.localeCompare(b.task))





  return (
    <div className='todos' onSubmit={(e)=>handleAddTask(e)}>
     <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)} className='slected'>
      <option value='input'>Sorted by input</option>
      <option value='checked'>Sorted by checked</option>
      <option value='alphabet'>Sorted by Alphabet</option>

     </select>

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
        sortedTodos.map((item) => (
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
