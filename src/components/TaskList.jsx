import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation
} from '../api/apiSlice'

const TaskList = () => {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery()
  const [deleteTask] = useDeleteTaskMutation()
  const [updateTask] = useUpdateTaskMutation()

  return (
    <>
      {isLoading ? (
        <div>Loading....</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <button onClick={() => deleteTask(task.id)}>delete</button>
              <input
                type="checkbox"
                id={task.id}
                checked={task.completed}
                onChange={() =>
                  updateTask({
                    ...task,
                    completed: e.target.checked
                  })
                }
              />
              <label htmlFor={task.id}>completed</label>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default TaskList
