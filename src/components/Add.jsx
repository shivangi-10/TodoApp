import { useState } from "react";
import moment from "moment";

export const Add = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Add item to the list
  const handleSubmit = () => {
    const item = {
      title: title,
      description: description,
      date: moment(Date.now()).format("YYYY MMM DD h:mm"),
    };
    props.setTodolist((prev) => [...prev, item]);
    props.setAdd(false);
  };
  return (
    <>
      <div className="addlist">
        <form>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />
          <input type="submit" onClick={() => handleSubmit()} />
        </form>
      </div>
    </>
  );
};
