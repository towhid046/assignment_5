
import '../../assets/reset.css'
import './Home.css'
import TodoList from './../../Components/TodoList/TodoList';
import PostList from '../../Components/PostList/PostList';
import Counter from '../../Components/Counter/Counter';
const Home = () => {
    return(
        <>
        <div>
            <h1 className='task_heading'>Task 1: Implementing a To-Do List</h1>
            <TodoList/>
            <h1 className='task_heading'>Task 4 : Fetching and Displaying Posts from JSONPlaceholder API</h1>
            <PostList/>
            
            <h1 className='task_heading'>Task 5 : Tashbih counter with some conditions</h1>
            <Counter/>
        </div>
        </>
    )
}

export default Home;