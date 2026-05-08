import { useEffect, useState } from "react"
import axios from "axios"

function Tasks() {

  const [tasks, setTasks] = useState([])

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("Pending")
  const [priority, setPriority] = useState("Medium")

  const handleTask = async (e) => {

    e.preventDefault()

    try {

      await axios.post(
        "https://team-task-manager-production-1953.up.railway.app/tasks",
        {
          title,
          description,
          status,
          priority,
          assigned_to: 1,
          project_id: 1
        }
      )

      alert("Task Created")
      fetchTasks()

      setTitle("")
      setDescription("")

    } catch (error) {

      console.log(error)

      alert("Failed To Create Task")
    }
  }
  useEffect(() => {

  fetchTasks()

}, [])

const fetchTasks = async () => {

  try {

    const response = await axios.get(
      "https://team-task-manager-production-1953.up.railway.app/tasks/"
    )

    setTasks(response.data)

  } catch (error) {

    console.log(error)
  }
}

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Create Task
        </h1>

        <form
          onSubmit={handleTask}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 outline-none"
          />

          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 outline-none h-32"
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 outline-none"
          >
            <option>
              Pending
            </option>

            <option>
              In Progress
            </option>

            <option>
              Completed
            </option>
          </select>

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 outline-none"
          >
            <option>
              Low
            </option>

            <option>
              Medium
            </option>

            <option>
              High
            </option>
          </select>

          <button
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
          >
            Create Task
          </button>

        </form>
        <div className="mt-10">

  <h2 className="text-2xl font-bold mb-4">
    All Tasks
  </h2>

  <div className="space-y-4">

    {tasks.map((task) => (

      <div
        key={task.id}
        className="bg-gray-700 p-4 rounded-xl"
      >

        <h3 className="text-xl font-bold">
          {task.title}
        </h3>

        <p className="text-gray-300">
          {task.description}
        </p>

        <div className="flex gap-4 mt-3">

          <span className="text-yellow-400">
            {task.status}
          </span>

          <span className="text-red-400">
            {task.priority}
          </span>

        </div>

      </div>

    ))}

  </div>

</div>

      </div>

    </div>
  )
}

export default Tasks