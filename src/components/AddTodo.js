
import React,{useState} from 'react'

const AddTodo = ({onAdd}) => {
     const [input, setInput] = useState("");

     const handleSubmit=(e)=>{
         e.preventDefault();
         if(!input.trim()) return;
         onAdd(input);
         setInput("");
     }

  return (
      <form onSubmit={handleSubmit}>
          <input type='text' 
          value={input} 
          placeholder='Add a new task...'
          onChange={(e)=>setInput(e.target.value)} />

           <button type="submit">Add</button>
      </form>
  )
}

export default AddTodo