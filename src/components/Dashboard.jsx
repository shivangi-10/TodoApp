import { useState } from "react";
import { Add } from "./Add";

export const Dashboard = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState("");
  const [add, setAdd] = useState(false);
  const [todolist, setTodolist] = useState([]);
  const handleAdd = () => {
    setAdd(true);
  };

  //setting edit variables
  const handleEdit = (value, id) => {
    setEditValue(value);
    setEditId(id);
    setIsEdit(true);
  };

  //update the todo item
  const handleUpdate = () => {
    const item = todolist.filter((ele) =>
      ele.id === editId ? (ele.title = editValue) : ele.value
    );
    setTodolist((prev) => [...prev, item]);
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit ? (
        <>
          <div className="add">
            <button className="logout" onClick={props.logout}>
              logout
            </button>
            <button onClick={handleAdd}>Add</button>
          </div>
          {todolist.map((ele) => (
            <div className="todo">
              <span>{ele.title}</span>
              <span>{ele.description}</span>
              <span>{ele.date}</span>
              <button onClick={() => handleEdit(ele.value, ele.id)}>
                Edit
              </button>
            </div>
          ))}

          {add && <Add setAdd={setAdd} setTodolist={setTodolist} />}
        </>
      ) : (
        <>
          <div className="edit">
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button className = "update" onClick={handleUpdate}>Update</button>
          </div>
        </>
      )}
    </>
  );
};
