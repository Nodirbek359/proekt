// src/components/TodoList.js
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Todolist.css";

const TodoList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const [todos, setTodos] = useState([]);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddTodo = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const newTodo = { name, result: `${name}'ning natijasi: ${num1 + num2}` };

      // Update state with the new todo
      setTodos((prevTodos) => [...prevTodos, newTodo]);

      // Update local storage with the new todos
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));

      setName("");
      setNumber1("");
      setNumber2("");
      closeModal();
    } else {
      alert("Iltimos, to'g'ri sonlarni kiriting");
    }
  };

  return (
    <div className="prose todo">
      <button onClick={openModal}>Add Todo</button>

      <Modal
        className="modalist prose"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Todo Modal"
      >
        <h2>Add Todo</h2>
        <label className="modal_label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number 1:
          <input
            type="text"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number 2:
          <input
            type="text"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={closeModal}>Close</button>
      </Modal>

      {todos.map((todo, index) => (
        <p key={index}>{todo.result}</p>
      ))}
    </div>
  );
};

export default TodoList;
