// src/TaskList.jsx
import React, { useState, useEffect } from 'react';


const Tasklist = () => {
const [tareas, setTareas] = useState([]); // Corregido el uso de useState

    // Simulación de carga de datos desde una API con useEffect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTareas(data))
            .catch((error) => console.error('Error fetching tareas:', error));
    }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

    return (
        <div className="container mt-5">
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Tasklist