import React from 'react';
import './App.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

function App() {
  return (
    <div className="App">
 <DragDropContext onDragEnd = {result =>{console.log(result)}}>
Add DragDropContext
   </DragDropContext>
    </div>
  );
}

export default App;
