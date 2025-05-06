import { useState } from "react";
import Task from "./comps/Tcontainer";
import Tasks from "./comps/Task";
import addToDo from "./comps/addToDo";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(Tasks);
  const [filteredData, setFilteredData] = useState(data);
  const completedNumber = data.filter(
    (task) => task.status === "completed"
  ).length;
  const createTask = () => {
    const newTask = {
      id: Math.random(),
      name: inputValue,
      status: "active",
    };
    setData([...data, newTask]);
    setFilteredData([...data, newTask]);
    setInputValue("");
  };
  const deleteTask = (id) => {
    const filteredData = data.filter((Task) => Task.id !== id);
    setData(filteredData);
    setFilteredData(filteredData);
  };

  const toggleStatus = (id) => {
    const changedData = data.map((task) => {
      if (task.id === id) {
        const isDone = task.status === "active" ? false : true;
        task.status = isDone ? "active" : "completed";
        return task;
      }
      return task;
    });
    setData(changedData);
    setFilteredData(changedData);
  };

  const clearCompleted = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setData(filteredData);
    setFilteredData(filteredData);
  };
  const filterCompleted = () => {
    const filteredData = data.filter((task) => task.status === "completed");
    setFilteredData(filteredData);
  };
  const filterActive = () => {
    const filteredData = data.filter((task) => task.status === "active");
    setFilteredData(filteredData);
  };
  const clearFilter = () => {
    setFilteredData(data);
  };

  return (
    <div className=" flex justify-center w-[100vw] h-[100vh] bg-gray-300/50 ">
      <div className=" flex flex-col items-center justify-start bg-[#FFFFFF] shadow-md w-[400px] h-[500px] rounded-lg ">
        <div
          id="Main-co"
          className="flex flex-col  w-[345px] h-[500px] rounded-md py-[26px] px-[16px] items-start justify-start  gap-2"
        >
          <h2 className="flex items-center text-lg mx-[110px] font-black text-center capitalize ">
            To-do List
          </h2>
          <div
            id="Input"
            className="w-full h-[38px] shadow-md flex flex-row gap-2 "
          >
            <input
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              value={inputValue}
              type="text"
              placeholder="Add new task..."
              className=" flex rounded-md border-[1px] border-gray-500 w-[280px] h-full px-3 py-1"
              id="inputText"
            />
            <button
              className="flex text-white bg-blue-500 w-fit justify-center items-center rounded-lg border-[1px] border-blue-600 px-3 py-1 "
              handleClick={createTask}
              onClick={addToDo}
            >
              Add
            </button>
          </div>
          <div id="Filter" className="flex gap-2 ">
            <button
              // onClick={handleClick}
              className="flex text-white bg-blue-500 w-[50px] justify-center items-center rounded-lg border-[1px] border-blue-600 px-3 py-1 "
              handleClick={clearFilter}
              text="All"
            >
              All
            </button>
            <button
              className="flex w-fit justify-center items-center rounded-lg border-[1px] bg-gray-100 px-3 py-1 "
              handleClick={filterActive}
              text="Active"
            >
              Active
            </button>
            <button
              className="flex w-fit justify-center items-center rounded-lg border-[1px] bg-gray-100 px-3 py-1 "
              handleClick={filterCompleted}
              text="Completed"
            >
              Completed
            </button>
          </div>
          <div
            id="Content"
            className="flex flex-col gap-3 overflow-scroll max-h-[220px] snap-y snap-mandatory "
          >
            {filteredData.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  name={inputValue}
                  completed={task.completed}
                  deleteTask={deleteTask}
                  toggleStatus={toggleStatus}
                />
              );
            })}
            {filteredData.length === 0 && (
              <p className="  flex  felx-col text-center text-[#6B7280] text-sm justify-center items-center ">
                No tasks yet. Add one above!
              </p>
            )}
          </div>
          <div id="Summary" className="flex flex-row w-full h-fit">
            <div className="  flex pt-4 pb-1 border-t border-[#E4E4E7] gap-12 text-sm">
              <p className="text-[#6B7280]">
                {" "}
                {completedNumber} of {data.length} tasks completed.
              </p>
              <button onClick={clearCompleted} className="text-[#EF4444]">
                {" "}
                Clear completed
              </button>
            </div>
          </div>
          <div
            id="Footer"
            className="flex flex-row items-center pl-[20%] gap-4 "
          >
            <p className=" flex text-xs text-[#6B7280]"> Powered By{""}</p>
            <a
              href="https://pinecone-academy-fgmu.vercel.app/"
              className=" flex text-[#3B73ED] text-xs"
            >
              Pinecone Academy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
