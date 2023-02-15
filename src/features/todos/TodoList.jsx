import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getTodos, addTodos, updateTodos, deleteTodos } from "../../api/todosApi"

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("")
  const queryClient = useQueryClient()

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos)

  const addTodoMutation = useMutation(addTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos")
    }
  })

  const updateTodoMutation = useMutation(updateTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos")
    }
  })

  const deleteTodoMutation = useMutation(deleteTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos")
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false })
    setNewTodo("")
  }

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload}/>
      </button>
    </form>
  )

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isError) {
    content = <p>{error.message}</p>
  } else {
    content = JSON.stringify(todos)
  }

  return (
    <main>
      <h1>Todo list</h1>
      {newItemSection}
      {content}
    </main>
  )
}
export default TodoList