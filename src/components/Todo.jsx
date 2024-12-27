import {useState} from 'react'
function Todo({item, handleToggle,handleDeleleTask,handleUpdate}) {
   
  const [isOpen, setIsOpen] = useState(false);

 
    

  return (   
    
    <div className="todo">
    <input 
    type="checkbox"
    checked={item.done}
    onChange={() => handleToggle(item.id)}
    />
      <p className={item.done ? 'checked' : ''}>{item.task}</p>
      <button onClick={() => handleUpdate(item.id,item.task)}>update</button>
      <button onClick={() => setIsOpen(() => !isOpen)}>delete</button>
      
   {isOpen && (
    <div className="modal-overlay">
      <div className="modal-content">
        <div>Are you Sure you Want to delete this TASK?</div>
        <div className="modal-actions">
          <button onClick={() => handleDeleleTask(item.id)}>Yes</button>
          <button onClick={() => setIsOpen(false)}>No</button>
        </div>
      </div>
    </div>
  )}
    </div>
   
  )
}

export default Todo
