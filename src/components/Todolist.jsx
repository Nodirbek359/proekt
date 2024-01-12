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

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));

      setName("");
      setNumber1("");
      setNumber2("");
      closeModal();
    } else {
      alert("Iltimos, to'g'ri sonlarni kiriting");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
        <div key={index} className="flex gap-3" >
          <p>{todo.result}</p>
          <button className="btn" onClick={() => handleDeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
