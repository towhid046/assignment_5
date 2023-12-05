import { useState, useEffect } from "react";
import PostItem from "../PostItem/PostItem";
import './PostList.css'
const PostList = () => {
  const [users, setUser] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    const loadData = async() => {
      const response = await fetch(url)
      const data = await response.json()
      setUser(data)
    }
    loadData()
  }, [])

  return (
    <>
    <div className="container">
      {
        users.map(user => <PostItem user = {user} />)
      }
    </div>
    </>
  )
}

export default PostList;