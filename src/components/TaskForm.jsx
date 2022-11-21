import { useCreateTaksMutation } from '../api/apiSlice'

const TaskForm = () => {
  const [creatTask] = useCreateTaksMutation()

  const handleSubmit = e => {
    e.preventDefault()

    const name = e.target.elements.name.value.trim()
    const description = e.target.elements.description.value.trim()
    const completed = e.target.elements.completed.checked

    creatTask({
      name,
      description,
      completed
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"></input>
      <input type="text" name="description"></input>
      <input type="checkbox" name="completed"></input>
      <button>Add Task</button>
    </form>
  )
}

export default TaskForm
