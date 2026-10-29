import { useState } from "react";
import "./App.css";

// Q3: Information for the profile cards
const profiles = [
  { id: 1, name: "Rahul", branch: "CSE", year: 1 },
  { id: 2, name: "Priya", branch: "ECE", year: 2 },
  { id: 3, name: "Aman", branch: "IT", year: 3 },
];

// Q5: Initial information for the students
const initialStudents = [
  { id: 1, name: "Rahul", active: true },
  { id: 2, name: "Priya", active: false },
  { id: 3, name: "Aman", active: true },
];

// Q3: Reusable User Profile Card component
function UserProfileCard({ name, branch, year }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <p>Branch: {branch}</p>
      <p>Year: {year}</p>
    </div>
  );
}

// Main React component
function App() {
  // Q1: Counter
  const [count, setCount] = useState(0);

  // Q2: Background Color Switcher
  const colors = [
    { name: "Lavender", value: "#e9d5ff" },
    { name: "Light Blue", value: "#bfdbfe" },
    { name: "Light Green", value: "#bbf7d0" },
    { name: "Light Pink", value: "#fbcfe8" },
  ];

  const [colorIndex, setColorIndex] = useState(0);

  // Q4: Password visibility
  const [password, setPassword] = useState("ReactBeginner123");
  const [showPassword, setShowPassword] = useState(false);

  // Q5: Student activity
  const [students, setStudents] = useState(initialStudents);

  // Q5: Toggle one student's activity status
  function toggleStudentStatus(studentId) {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId
          ? { ...student, active: !student.active }
          : student
      )
    );
  }

  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">REACT PRACTICE</p>
        <h1>Mini Assignment 1</h1>
        <p>State, Props, Lists and Conditional Rendering</p>
      </header>

      {/* Q1: Counter Application */}
      <section className="section">
        <h2>Q1. Counter Application</h2>

        <p className="counter-number">{count}</p>

        <div className="button-row">
          <button
            onClick={() => setCount((previous) => previous + 1)}
          >
            Increment +
          </button>

          <button
            onClick={() =>
              setCount((previous) => Math.max(0, previous - 1))
            }
          >
            Decrement -
          </button>

          <button
            className="secondary"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </section>

      {/* Q2: Background Color Switcher */}
      <section className="section">
        <h2>Q2. Background Color Switcher</h2>

        <div
          className="color-card"
          style={{ backgroundColor: colors[colorIndex].value }}
        >
          <h3>{colors[colorIndex].name}</h3>
          <p>The background changes when you click the button.</p>
        </div>

        <button
          onClick={() =>
            setColorIndex(
              (previous) => (previous + 1) % colors.length
            )
          }
        >
          Change Color
        </button>
      </section>

      {/* Q3: Reusable User Profile Cards */}
      <section className="section">
        <h2>Q3. User Profile Cards</h2>

        <div className="profile-grid">
          {profiles.map((profile) => (
            <UserProfileCard
              key={profile.id}
              name={profile.name}
              branch={profile.branch}
              year={profile.year}
            />
          ))}
        </div>
      </section>

      {/* Q4: Show/Hide Password */}
      <section className="section">
        <h2>Q4. Show/Hide Password</h2>

        <div className="password-row">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter a password"
            aria-label="Password"
          />

          <button
            className="secondary"
            onClick={() => setShowPassword((previous) => !previous)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
      </section>

      {/* Q5: Student Activity Indicator */}
      <section className="section">
        <h2>Q5. Student Activity Indicator</h2>

        <div className="student-list">
          {students.map((student) => (
            <div className="student-row" key={student.id}>
              <div>
                <h3>{student.name}</h3>

                <span
                  className={`status ${
                    student.active ? "active" : "inactive"
                  }`}
                >
                  {student.active ? "Active" : "Inactive"}
                </span>
              </div>

              <button
                className="secondary"
                onClick={() => toggleStudentStatus(student.id)}
              >
                {student.active ? "Set Inactive" : "Set Active"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer>Mini Assignment 1 — React Fundamentals</footer>
    </main>
  );
}

export default App;