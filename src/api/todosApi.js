import axios from "axios"

const todosApi = axios.create({
  baseURL: "http//localhost:5000",
})

export const getTodos = async () => {
  const response = await todosApi.get("/todos")
  return response.data
}

export const addTodos = async (todo) => {
  return await todosApi.post("/post", todo)
}

export const updateTodos = async (todo) => {
  return await todosApi.patch(`/post/${todo.id}`, todo)
}

export const deleteTodos = async ({ id }) => {
  return await todosApi.delete(`/post/${id}`, id)
}

export default todosApi
