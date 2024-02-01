// import { useState } from "react"
// import axios from "axios"
// export default function Create()
// {   const [task,setTask]=useState("")
//      const handleAdd= async ()=>
//      {
//         // axios.post("http://localhost:3000/todo",{task : task})
//         // .then(res=>console.log(res))
//         // .catch(err=> console.log(err))

//         try {
//             await axios.post('http://localhost:3000/todo', { task });
//             setTask(''); // Reset the input field
//           } catch (error) {
//             console.log(error);
//           }
//      }
//     return(

//         <div className="create_form">
//             <input type="text" name="" id="" value={task} onChange={(e)=>setTask(e.target.value)} />
//             <button type="button" onClick={handleAdd}>Add</button>
//         </div>
//     )
// }


import { useState } from "react";
import axios from "axios";
import { FaPlus } from 'react-icons/fa';

export default function Create() {
  const [task, setTask] = useState("");

  const handleAdd = async () => {
    if (!task.trim()) {
      // Do not allow empty task submission
      return;
    }

    try {
      await axios.post('http://localhost:3000/todo', { task });
      setTask(''); // Reset the input field
    } catch (error) {
      console.log(error);
      // Add proper error handling or user feedback here
    }
  };

  return (
    <div className="create_form">
      <div className="input-container">
      <input type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} />
      <div className="plus-icon">
      <FaPlus onClick={() => handleAdd(task)} />
      </div>
      </div>
    </div>
  );



  
}

// {/* <button type="button" onClick={handleAdd} disabled={!task.trim()}>
//         Add
//       </button> */}
