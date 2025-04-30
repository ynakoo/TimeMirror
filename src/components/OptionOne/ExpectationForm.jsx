import { useState } from "react";

function ExpectationForm({ onSave }) {
  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ task, hours: Number(hours) });
    setTask("");
    setHours("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        required
        min="0"
        max="24"
      />
      <button type="submit">Add Expectation</button>
    </form>
  );
}

export default ExpectationForm;
