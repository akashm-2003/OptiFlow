import React, { useEffect, useState } from "react";
import "./Sprint_form.css";
import Header from "../Header";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

const Springform = () => {
  // Use the useState hook to create state variables for the form inputs
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [taskSummary, setTaskSummary] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskDeadline, setTaskDeadline] = useState(new Date());
  const [color, setColor] = useState("red");

  // const addTask = async() => {
  //   const x=await setDoc(doc(db, "kanban",String (Math.floor(Math.random() * 100))), {
  //     Title: taskTitle,
  //     Summary: taskSummary,
  //     Status: taskStatus,
  //     Priority: priority,
  //     Deadline: taskDeadline,
  //     Color: color,
  //   });
  //   console.log(x);
  // };

  // This function will be called when the form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the form data here
    if (
      taskTitle === "" ||
      taskSummary === "" ||
      taskStatus === "" ||
      priority === ""
    ) {
      alert("Please fill all the fields");
      return; // Return early if form is not valid
    }
    if (priority === "High") {
      setColor("red");
    } else if (priority === "Medium") {
      setColor("blue");
    } else if (priority === "Low") {
      setColor("green");
    }
    await addTask(); // Call addTask function
  };
  // useEffect(() => {
  //   getKanbanData();
  // },[])
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Project-name" title="Sprint" />
      <form className="sprint_form" onSubmit={handleSubmit}>
        <label className="text_label" htmlFor="taskTitle">
          Task Title:
        </label>
        <input
          className="input_select"
          type="text"
          id="taskTitle"
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
        />
        <label className="text_label" htmlFor="taskDescription">
          Task Description:
        </label>
        <input
          className="input_select"
          type="text"
          id="taskDescription"
          value={taskSummary}
          onChange={(event) => setTaskSummary(event.target.value)}
        />
        <label className="text_label" htmlFor="deadlineInput">
          Task Deadline:
        </label>
        <input
          className="input_select"
          type="date"
          id="deadlineInput"
          value={taskDeadline.toISOString().split("T")[0]}
          onChange={(event) => setTaskDeadline(new Date(event.target.value))}
        />
        <label className="text_label" htmlFor="prioritySelect">
          Priority:
        </label>
        <select
          className="input_select"
          id="prioritySelect"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="Development">Development</option>
          <option value="Completed">Completed</option>
        </select>
        <label className="text_label" htmlFor="prioritySelect">
          Status:
        </label>
        <select
          className="input_select"
          id="prioritySelect"
          value={taskStatus}
          onChange={(event) => setTaskStatus(event.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        {/* Other input fields */}
        <button className="button_form" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Springform;