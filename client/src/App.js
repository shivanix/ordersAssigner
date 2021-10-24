import { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EditCost from "./Components/helpers/editCost";
import EditRevenue from "./Components/helpers/editRevenue";
import UpdateDriverOrder from "./Components/helpers/updateDriverOrder"
// const itemsFromBackend=[
//   {id:'11aa', content: 'First order'},
//   {id:'22aa', content: 'Second order'}
// ]

// const columnsFromBackend =
//   {
//     ['Hello1']:{
//       name: 'StackOrders',
//       items: [itemsFromBackend]
//     }
//   }

function App() {
  const [columns, setColumns] = useState({});
  const [drivers, setDrivers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const onDragEnd = async (result) => {
    console.log("EAR CIL", columns);
    if (!result.destination) return;

    const {source, destination} = result;
    console.log("CIL source dest", source, destination);
    if (source.droppableId !== destination.droppableId) {
        console.log("COLUMNS: ", columns, "result: ", result);
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        UpdateDriverOrder(result.draggableId, destination.droppableId).then(()=> {
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });

            console.log("CIL", columns);
             setLoaded(false);
        })
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};




  
  // Func to fetch data for drivers from db
  const getDriver = async () => {
    try {
      const response = await fetch("http://localhost:5000");
      const jsonData = await response.json();

      setDrivers(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Func to fetch data for orders from db
  const getOrder = async () => {
    try {
      const response = await fetch("http://localhost:5000/orders");
      const jsonData = await response.json();

      setOrders(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <DragDropContext
        onDragEnd={(result) => {
          console.log(result);
        }}
      >
        {Object.entries(columns).map((id, column) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    className="column-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "lightgrey",
                      padding: 4,
                      width: 250,
                      minHeight: 500,
                      border: "5px solid black",
                    }}
                  >
                    {/* {console.log("columnnnnnnn", column.items)} */}
                    {column.items.map((item, index) => {
                      //  console.log('ITEM:', item);
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        ></Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
