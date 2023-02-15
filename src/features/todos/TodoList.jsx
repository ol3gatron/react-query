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

  return (
    <div>TodoList</div>
  )
}
export default TodoList