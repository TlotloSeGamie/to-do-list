import React from "react";
import ninja from '../Assets/Ninja 1.jpeg';
import ToDoApp from "./ToDo";


function Home() {
    return (
        <div className="home-container">
            <div className="navbar">
                <img src={ninja} alt="Ninja" className="ninja" />
                <h1>To Do Task Master</h1>
            </div>
            <ToDoApp />
        </div>
    );
}

export default Home;