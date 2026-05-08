import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {

    e.preventDefault()
    const navigate = useNavigate()

    try {

      const response = await axios.post(
       "https://team-task-manager-production-1953.up.railway.app/login/",
        {
          email,
          password
        }
      )

      console.log(response.data)

     localStorage.setItem(
  "token",
  response.data.access_token
)

alert("Login Successful")

navigate("/dashboard")

    } catch (error) {

      console.log(error)

      alert("Login Failed")
    }
  }

  return (

    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-96">

        <h1 className="text-3xl text-white font-bold mb-6 text-center">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
          >
            Login
          </button>
          <p className="text-gray-400 text-center mt-4">
  Don't have an account?

  <a
    href="/signup"
    className="text-blue-400 ml-2"
  >
    Signup
  </a>
</p>

        </form>

      </div>

    </div>
  )
}

export default Login