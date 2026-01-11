import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId: email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center my-10 px-10 min-h-[80vh] items-center">
      <div className="card w-96 bg-base-300 shadow-sm">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold">Login</h2>
          </div>

          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID*</legend>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password*</legend>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="input"
                placeholder="Type here"
              />
            </fieldset>
          </div>

          <div className="mt-6">
            <button onClick={handleLogin} className="btn btn-primary btn-block">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
