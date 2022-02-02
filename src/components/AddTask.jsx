import { useState } from "react";
import "./pomodoro.styles.scss";

export default function AddTask(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      text: input,
    });

    setInput("");
  };
  return (
    <section className="write__task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={input}
          name="text"
          placeholder="Task name"
        />
        <button className="btn-add">Add task</button>
      </form>
      <p>Here you can write the name of the task you want to do...</p>
    </section>
  );
}
