import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)

    setEmail('')
    setPassword('')
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            className="border-2 border-emerald-600 px-5 py-3 text-xl outline-none bg-transparent  rounded-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="border-2 mt-3 border-emerald-600 px-5 py-3 text-xl outline-none bg-transparent  rounded-full"
            type="password"
            placeholder="Enter your password"
          />
          <button className=" mt-5 bg-emerald-600 px-5 py-3 w-full text-xl outline-none   rounded-full ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
