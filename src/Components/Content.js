import React, { useState } from "react";

function DayPlanner() {
    // Список задач
    const [tasks, setTasks] = useState([]);

    // Текущая задача, добавляемая в список
    const [newTask, setNewTask] = useState("");

    // Обработчик нажатия кнопки "Добавить задачу"
    const handleAddTask = () => {
        if (newTask !== "") {
            setTasks([...tasks, { name: newTask, done: false }]);
            setNewTask("");
        }
    };

    // Обработчик нажатия кнопки "Отметить выполненной"
    const handleToggleDone = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    };

    // Обработчик нажатия кнопки "Удалить задачу"
    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    // Обработчик ввода новой задачи в текстовое поле
    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    // Формирование списка задач
    const taskList = tasks.map((task, index) => (
        <div key={index}>
            <input type="checkbox" checked={task.done} onChange={() => handleToggleDone(index)} />
            <span style={{ textDecoration: task.done ? "line-through" : "none" }}>{task.name}</span>
            <button onClick={() => handleDeleteTask(index)}>Удалить</button>
        </div>
    ));

    return (
        <div>
            <h1>Контроль дня</h1>
            <input type="text" value={newTask} onChange={handleNewTaskChange} />
            <button onClick={handleAddTask}>Добавить задачу</button>
            {taskList}
        </div>
    );
}

export default DayPlanner;