
import { useRef, useState } from "react";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedData({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-800 p-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-7 text-center">
          <div className="text-5xl mb-4">🔐</div>
          <h1 className="text-3xl font-bold text-indigo-700">
            Login Form
          </h1>
          <p className="mt-2 text-gray-500">
            Practical 15: Uncontrolled Form
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold">
              Username
            </label>
            <input
              type="text"
              ref={usernameRef}
              placeholder="Enter username"
              required
              className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Password
            </label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter password"
              required
              className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 p-3 font-bold text-white hover:bg-indigo-700"
          >
            Submit Login
          </button>
        </form>

        {submittedData && (
          <div className="mt-6 rounded-xl bg-green-50 p-4">
            <h2 className="mb-3 text-lg font-bold text-green-700">
              Form Submitted Successfully!
            </h2>
            <p className="break-words">
              <strong>Username:</strong> {submittedData.username}
            </p>
            <p className="break-words">
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
