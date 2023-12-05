import './TodoItem.css'
const TodoItem = ({ item }) => {
  const { text, completionStatus } = item;
  return (
    <>
      <div className='todoItem'>
        <li>
          <span className="todo_title">{text}</span>
          <button className="delete_btn btn">DEL</button>
          <button className="complete_btn btn">COM</button>
        </li>
      </div>
    </>
  );
};

export default TodoItem;
