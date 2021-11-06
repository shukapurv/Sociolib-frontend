/* eslint-disable object-shorthand */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const data = {
    username: username,
    // eslint-disable-next-line prettier/prettier
    password: password,
  };

  const loginfunc = () => {
    axios
      .post(`http://127.0.0.1:8000/auth/login/`, data)
      .then((response) => {
        router.push("/");
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAG69zfNl6IzMgxtWLDU8VuWXonpO_sSNX5Q&usqp=CAU"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Not registered?
          <a
            href="#"
            className="mx-2 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Register here
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                username
              </label>
              <div className="mt-1">
                <input
                  id="text"
                  name="text"
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  autoComplete="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  loginfunc();
                }}
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
