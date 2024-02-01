// import { useEffect, useState } from "react"
// import Create from "./Create"
// import axios from "axios"
// import { BsCircleFill } from 'react-icons/bs';
// import { BsFillTrashFill } from 'react-icons/bs';
// import {BsCheckCircleFill} from 'react-icons/bs';


// export default function Home()
// {
//     const [todos,setTodos]=useState([])
//     const [completedTodos, setCompletedTodos] = useState([]);
//     useEffect(()=>{
//         axios.get("http://localhost:3000/todo")
//         .then(result=>setTodos(result.data))
//         .catch(err=>console.log(err))

//         axios.get("http://localhost:3000/completed")
//         .then(result => setCompletedTodos(result.data))
//         .catch(err => console.log(err));

//     },[todos])

//     const handleEdit = async(id)=>{
//         try{
//      await axios.put(`http://localhost:3000/update/${id}?_method=PUT`)

//      const updatedCompletedTodos = await axios.get("http://localhost:3000/completed")
//      setCompletedTodos(updatedCompletedTodos.data);
//         }
//         catch (error) {
//             console.log(error);
//           }
       
//     }

//     const handleDelete = (id)=>{
//         axios.put(`http://localhost:3000/delete/${id}?_method=DELETE`)
       
//            .then(result=>console.log(result))
//            .catch(err=>console.log(err))
//        }
//     return(
//         <div className="outer-most-div">
//              <div className="header">
//         <h2>Todo List</h2>
//       </div>
      
//       <Create></Create>
//          <div className="home">
         
//             <div className="all-tasks">
//             <h3>All Tasks</h3> 
//             {  
//             todos.length===0
//                 ?
//                 <div>
//                     No Record
//                 </div>
//                 :
//                 todos.map((todo)=>(
//                     <div className="task" key={todo._id}>
//                         <div className="checkbox" onClick={()=>handleEdit(todo._id)} >
//                             {todo.done ? <BsCheckCircleFill className="icon" ></BsCheckCircleFill>
//                             :<BsCircleFill className="icon"/>
//                             }     
//                        <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
//                         </div>
//                         <div>
//                         <span><BsFillTrashFill className="icon" onClick={ ()=>handleDelete(todo._id)}/>  </span>
//                         </div>
//                     </div>
//                 ))

//             }
//             </div>
//      <div className="completed-tasks">
//         <h3>Completed Tasks</h3>
//         {completedTodos.length === 0 ?
//           <div>No Completed Tasks</div> :
//           completedTodos.map((todo) => (
//             <div className="task" key={todo._id}>
//               <div className="checkbox">
//                 <BsCheckCircleFill className="icon" />
//                 <p className="line_through">{todo.task}</p>
//               </div>
//               <div>
//                 <span><BsFillTrashFill className="icon" />  </span>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//      </div>
//     </div>
//     )
// }


// new-------------------------------

// import { useEffect, useState } from "react";
// import Create from "./Create";
// import axios from "axios";
// import { BsCircleFill } from 'react-icons/bs';
// import { BsFillTrashFill } from 'react-icons/bs';
// import { BsCheckCircleFill } from 'react-icons/bs';

// export default function Home() {
//   const [todos, setTodos] = useState([]);
//   const [completedTodos, setCompletedTodos] = useState([]);
//   const [showCompleted, setShowCompleted] = useState(false); // Added state

//   useEffect(() => {
//     axios.get("http://localhost:3000/todo")
//       .then(result => setTodos(result.data))
//       .catch(err => console.log(err));

//     axios.get("http://localhost:3000/completed")
//       .then(result => setCompletedTodos(result.data))
//       .catch(err => console.log(err));
//   }, [todos, showCompleted]);

//   const handleEdit = async (id) => {
//     try {
//       await axios.put(`http://localhost:3000/update/${id}?_method=PUT`);

//       const updatedCompletedTodos = await axios.get("http://localhost:3000/completed");
//       setCompletedTodos(updatedCompletedTodos.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleDelete = (id) => {
//     axios.put(`http://localhost:3000/delete/${id}?_method=DELETE`)
//       .then(result => console.log(result))
//       .catch(err => console.log(err));
//   }

//   return (
//     <div className="outer-most-div">
//       <div className="header">
//         <h2>Todo List</h2>
//         <button className="show-completed-tasks-btn" onClick={() => setShowCompleted(!showCompleted)}>
//           {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
//         </button>
//       </div>

//       <Create></Create>
//       <div className="home">
        
//         <div className="all-tasks">
//           <h3>All Tasks</h3>
//           {todos.length === 0 ?
//             <div>No Record</div> :
//             todos.map((todo) => (
//               <div className="task" key={todo._id}>
//                 <div className="checkbox" onClick={() => handleEdit(todo._id)}>
//                   {todo.done ? <BsCheckCircleFill className="icon" />
//                     : <BsCircleFill className="icon" />
//                   }
//                   <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
//                 </div>
//                 <div>
//                   <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)} />  </span>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//         {showCompleted && (
//           <div className="completed-tasks">
//             <h3>Completed Tasks</h3>
//             {completedTodos.length === 0 ?
//               <div>No Completed Tasks</div> :
//               completedTodos.map((todo) => (
//                 <div className="task" key={todo._id}>
//                   <div className="checkbox">
//                     <BsCheckCircleFill className="icon" />
//                     <p className="line_through">{todo.task}</p>
//                   </div>
//                   <div>
//                     <span><BsFillTrashFill className="icon" />  </span>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// new 2--------------------------------


import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/todo")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:3000/completed")
      .then(result => setCompletedTodos(result.data))
      .catch(err => console.log(err));
  }, [todos, showCompleted]);

  const handleEdit = async (id) => {
    try {
      await axios.put(`http://localhost:3000/update/${id}?_method=PUT`);

      const updatedCompletedTodos = await axios.get("http://localhost:3000/completed");
      setCompletedTodos(updatedCompletedTodos.data);
    } catch (error) {
      console.log(error);
    }
  }

  // const handleDelete = (id) => {
  //   axios.put(`http://localhost:3000/delete/${id}?_method=DELETE`)
  //     .then(result => console.log(result))
  //     .catch(err => console.log(err));
  // }


  const handleDelete = async (id) => {
    try {
      await axios.put(`http://localhost:3000/delete/${id}?_method=DELETE`);

      // Update both all tasks and completed tasks
      const updatedTodos = await axios.get("http://localhost:3000/todo");
      const updatedCompletedTodos = await axios.get("http://localhost:3000/completed");

      setTodos(updatedTodos.data);
      setCompletedTodos(updatedCompletedTodos.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAdd = async (task) => {
    try {
      await axios.post('http://localhost:3000/todo', { task });
      const updatedTodos = await axios.get("http://localhost:3000/todo");
      setTodos(updatedTodos.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="outer-most-div">
      <br /><br />
      <div className="header">
        <h2>Todo</h2>
        <br /><br />
      </div>

      <Create handleAdd={handleAdd} />

      <div className="container">
        <div className="all-tasks">
          <h3 >All Tasks</h3>
          <br />
          {todos.length === 0 ?
            <div>No Record</div> :
            todos.map((todo) => (
              <div className="task" key={todo._id}>
                <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                  {todo.done ? <BsCheckCircleFill className="icon" />
                    : <BsCircleFill className="icon" />
                  }
                  <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                </div>
                <div>
                  <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)} />  </span>
                </div>
              </div>
            ))
          }
        </div>

        {showCompleted && (
          <div className="completed-tasks">
            <h3>Completed Tasks</h3>
            <br />
            {completedTodos.length === 0 ?
              <div>No Completed Tasks</div> :
              completedTodos.map((todo) => (
                <div className="task" key={todo._id}>
                  <div className="checkbox">
                    <BsCheckCircleFill className="icon" />
                    <p className="line_through">{todo.task}</p>
                  </div>
                  <div>
                    <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)} />  </span>
                  </div>
                </div>
              ))
            }
          </div>
        )}

<button className=" btn show-completed-tasks-btn" onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? "Hide Completed Tasks" : "Show Completed Tasks"}
        </button>
      </div>
    </div>
  );
}
