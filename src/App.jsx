import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent() {
    if (name.trim() === "") {
      return;
    }

    setStudents([...students, name]);
    setName("");
  }

  function deleteStudent(index) {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  }

  return (
    <div className="container">
      <h1>Student List</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <h2>Total Students: {students.length}</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}

            <button onClick={() => deleteStudent(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;