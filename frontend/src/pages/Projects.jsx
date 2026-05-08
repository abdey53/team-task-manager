import { useState } from "react"
import axios from "axios"

function Projects() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleProject = async (e) => {

    e.preventDefault()

    try {

      await axios.post(
        "https://team-task-manager-production-1953.up.railway.app/projects/",
        {
          title,
          description,
          created_by: 1
        }
      )

      alert("Project Created")

      setTitle("")
      setDescription("")

    } catch (error) {

      console.log(error)

      alert("Failed To Create Project")
    }
  }

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Create Project
        </h1>

        <form
          onSubmit={handleProject}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 outline-none"
          />

          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 outline-none h-32"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
          >
            Create Project
          </button>

        </form>

      </div>

    </div>
  )
}

export default Projects