import {useState} from 'react'
function Todo({item, handleToggle,handleDeleleTask,handleUpdate}) {
   
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing , setIsEditing] = useState(false)
  const [edited , setEdited] = useState(item.task)
 
    function handleSave() {
      handleUpdate(item.id,edited)
      setIsEditing(false);
    }

  return (   
    
    <div className="todo">
    <input 
    type="checkbox"
    checked={item.done}
    onChange={() => handleToggle(item.id)}
    />
      {isEditing ? 
      (<input 
      type='text'
      value={edited}
      onChange={(e) => setEdited(e.target.value)}/> )
      : (<p className={item.done ? 'checked' : ''}>{item.task}</p>)
      }
     
      {
        isEditing 
        ? (<button onClick={handleSave}>Save</button>)
        :(<button onClick={()=> setIsEditing(true)}>update</button>)
      }
      
      
      
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
