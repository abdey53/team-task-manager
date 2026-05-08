import { useState } from "react"
import axios from "axios"

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("member")

  const handleSignup = async (e) => {

    e.preventDefault()

    try {

      await axios.post(
        "http://127.0.0.1:8000/register",
        {
          name,
          email,
          password,
          role
        }
      )

      alert("Signup Successful")

    } catch (error) {

      console.log(error)

      alert("Signup Failed")
    }
  }

  return (

    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-96">

        <h1 className="text-3xl text-white font-bold mb-6 text-center">
          Signup
        </h1>

        <form
          onSubmit={handleSignup}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          />

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

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          >
            <option value="member">
              Member
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
          >
            Signup
          </button>

        </form>

      </div>

    </div>
  )
}

export default Signup