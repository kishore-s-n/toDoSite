import { useState } from "react";
import { ArrowBigDown, ArrowBigUp, Plus, Trash } from "lucide-react";

function App() {
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
    console.log("taskdeleted" + index);
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
    console.log("taskdeleted" + index);
  }
  const [task, setTask] = useState(["Create a task"]);
  const [newTask, setNewTask] = useState("");
  return (
    <div className='bg-blue-900 text-white h-screen flex flex-col justify-center items-center  font-bold'>
      <h1 className='text-3xl font-extrabold py-5'>To Do List</h1>
      <div className='flex justify-center p-5 m-5 w-full'>
        <input
          type='text'
          placeholder='New task??'
          value={newTask}
          onChange={handleInputChange}
          className='p-2 rounded-lg mx-5 text-blue-600 lg:w-96 md:w-80 w-full'
        />
        <button onClick={addTask} className='p-2 bg-blue-400 rounded-lg'>
          <Plus />
        </button>
      </div>
      <ol className='flex flex-col items-start justify-start'>
        {task.map((task, index) => (
          <li key={index} className='p-2 m-2 flex justify-center w-[300px]'>
            <div className='flex flex-col md:flex-row justify-center items-center w-full'>
              <span className='lg:min-w-96 md:w-80  p-2 border-2 rounded-md bg-blue-500 text-blue-800 text-xl  '>
                {task}
              </span>
              <div className='flex p-2  h-max'>
                <button
                  onClick={() => {
                    deleteTask(index);
                  }}
                  className='bg-red-500 p-2 m-2 rounded-md '>
                  <Trash />
                </button>
                <button
                  onClick={() => {
                    moveTaskUp(index);
                  }}
                  className='bg-green-500 p-2 m-2 rounded-md'>
                  <ArrowBigUp />
                </button>
                <button
                  onClick={() => {
                    moveTaskDown(index);
                  }}
                  className='bg-green-500 p-2 m-2 rounded-md'>
                  <ArrowBigDown />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
