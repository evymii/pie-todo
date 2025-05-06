const Task = (props) => {
  return (
    <div
      key={props.id}
      className=" w-full rounded-md bg-[#F3F4F6] p-4 flex gap-3"
    >
      <div className=" flex flex-row w-[200px] px-3 py-1 gap-3">
        <input
          type="checkbox"
          className="flex "
          onChange={() => {
            props.toggleStatus(props.id);
          }}
        />
        <p className="flex "> {props.name}</p>
      </div>
      <button
        className=" flex bg-red-100 border-[1px] border-transparent rounded-md px-3 py-1 text-red-600"
        onClick={() => props.deleteTask(props.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
