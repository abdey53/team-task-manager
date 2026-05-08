import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function Dashboard() {
  const navigate = useNavigate()

useEffect(() => {

  const token = localStorage.getItem("token")

  if (!token) {
    navigate("/")
  }

}, [])

const handleLogout = () => {

  localStorage.removeItem("token")

  navigate("/")
}

  return (

    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <div className="bg-gray-800 p-4 shadow-lg flex justify-between">

        <h1 className="text-2xl font-bold">
          Team Task Manager
        </h1>

        <button
  onClick={handleLogout}
  className="bg-red-600 px-4 py-2 rounded-lg"
>
  Logout
</button>

      </div>

      {/* Main Layout */}
      <div className="flex">

        {/* Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen p-5">

         <ul className="space-y-4">

  <li>
    <Link
      to="/dashboard"
      className="hover:text-blue-400"
    >
      Dashboard
    </Link>
  </li>

  <li>
    <Link
      to="/projects"
      className="hover:text-blue-400"
    >
      Projects
    </Link>
  </li>

  <li>
    <Link
      to="/tasks"
      className="hover:text-blue-400"
    >
      Tasks
    </Link>
  </li>

</ul>

        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-8">

          <h2 className="text-3xl font-bold mb-8">
            Dashboard
          </h2>

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-6">

            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg">
                Total Tasks
              </h3>

              <p className="text-3xl font-bold mt-2">
                10
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg">
                Completed
              </h3>

              <p className="text-3xl font-bold mt-2 text-green-400">
                5
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg">
                Pending
              </h3>

              <p className="text-3xl font-bold mt-2 text-yellow-400">
                3
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg">
                Overdue
              </h3>

              <p className="text-3xl font-bold mt-2 text-red-400">
                2
              </p>
            </div>

          </div>

          {/* Recent Tasks */}
          <div className="mt-10 bg-gray-800 p-6 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Recent Tasks
            </h3>

            <table className="w-full">

              <thead>

                <tr className="text-left border-b border-gray-700">

                  <th className="p-3">
                    Task
                  </th>

                  <th className="p-3">
                    Status
                  </th>

                  <th className="p-3">
                    Priority
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-gray-700">

                  <td className="p-3">
                    Build Login API
                  </td>

                  <td className="p-3 text-yellow-400">
                    Pending
                  </td>

                  <td className="p-3 text-red-400">
                    High
                  </td>

                </tr>

                <tr>

                  <td className="p-3">
                    Create Dashboard UI
                  </td>

                  <td className="p-3 text-green-400">
                    Completed
                  </td>

                  <td className="p-3 text-yellow-400">
                    Medium
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard