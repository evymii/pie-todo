import Tasks from "./Task";
const inputTextEl = document.getElementById("inputText");
const addToDo = (props) => {
  return Tasks.push({
    name: inputTextEl.value,
    status: "Active",
    id: Tasks.length,
  });
};
export default addToDo;
