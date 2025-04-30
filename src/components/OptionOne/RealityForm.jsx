import { useState } from "react";

function RealityForm({ onSave }) {
  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !hours) {
      alert("Please fill all fields");
      return;
    }
    onSave({ task, hours: Number(hours) });
    setTask("");
    setHours("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Reality Section</h3>
      <input
        type="text"
        placeholder="What you actually did..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
        min="0"
        max="24"
      />
      <button type="submit" style={{ padding: "5px 15px" }}>
        Add Reality
      </button>
    </form>
  );
}

export default RealityForm;
