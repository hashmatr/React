import React, { useState } from 'react'; // ✅ Corrected import
import { useDispatch } from 'react-redux';
import { addTodos } from '../feachers/todos/todoslice';

function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch(); // ✅ Fixed call

  const TodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // optional: prevent empty todos
    dispatch(addTodos(input));
    setInput('');
  };

  return (
    <form onSubmit={TodoHandler} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)} // ✅ Added onChange
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
