import {
  Zap,
  Mail,
  Lock,
  Eye,
  ArrowRight,
  LogIn,
} from "lucide-react";

import Signup from "./signup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const stats = [
  {
    value: "20K+",
    title: "Products",
  },
  {
    value: "50K+",
    title: "Users",
  },
  {
    value: "4.9★",
    title: "Rating",
  },
];


function Login({user}) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
    let nav = useNavigate();
    // console.log(user);

    let [login, setLogin]=useState({
    email:"",
    psw:""
});



let handle=(e)=>{
  let{name,value}=e.target;
  setLogin({...login, [name]:value})
}

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex">

      {/* LEFT */}

      <div className="w-1/2 px-12 py-10 border-r border-zinc-700 relative overflow-hidden">

        {/* Glow */}

        <div className="absolute w-80 h-80 bg-lime-500/10 blur-[120px] rounded-full left-0 top-48"></div>

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="bg-lime-400 p-3 rounded-full">
            <Zap className="text-black" size={18} />
          </div>

          <h1 className="text-4xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>

        </div>

        {/* Content */}

        <div className="mt-48">

          <p className="text-lime-400 font-semibold tracking-wider">
            WELCOME BACK
          </p>

          <h2 className="text-7xl font-bold mt-5 leading-tight">
            Shop the future.
            <br />
            <span className="text-lime-400">Today.</span>
          </h2>

          <p className="text-zinc-500 mt-8 text-xl max-w-lg">
            Thousands of products, lightning-fast delivery,
            and prices that make your wallet happy.
          </p>

          <div className="grid grid-cols-3 gap-5 mt-16">

            {stats.map((item) => (
              <div
                key={item.title}
                className="border border-zinc-600 rounded-2xl py-8 text-center hover:border-lime-400 transition"
              >
                <h3 className="text-lime-400 text-4xl font-bold">
                  {item.value}
                </h3>

                <p className="text-zinc-500 mt-2">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="w-1/2 flex items-center justify-center">

<form onSubmit={(e)=>{
  e.preventDefault();

 const find =  users.find((item)=>{
  return(
     item.email === login.email &&
         item.psw===login.psw
        );
  });
      if (find) {
        console.log(find);
        localStorage.setItem("currentUsers", JSON.stringify(find))
        nav("/Home");
      }
else{
  alert("Incorrect");
}
}}
>
        <div className="bg-[#121212] border border-zinc-700 w-[550px] rounded-3xl p-10 shadow-2xl">

          <h2 className="text-5xl font-bold">
            Sign in
          </h2>

          <p className="text-zinc-500 mt-3">
            Enter your credentials to continue
          </p>

          {/* Email */}

          <div className="mt-10 relative">

            <Mail
              className="absolute left-4 top-4 text-zinc-500"
              size={18}
            />

            <input
            name="email"
            value={login.email}
            onChange={handle}
                type="email"
              placeholder="Email address"
              className="w-full bg-[#1b1b1b] border border-zinc-700 rounded-xl py-4 pl-12 outline-none focus:border-lime-400"
            />

          </div>

          {/* Password */}

          <div className="mt-5 relative">

            <Lock
              className="absolute left-4 top-4 text-zinc-500"
              size={18}
            />

            <input
            name="psw"
            value={login.psw}
            onChange={handle}
            placeholder="Enter Password"
              className="w-full bg-[#1b1b1b] border border-zinc-700 rounded-xl py-4 pl-12 pr-12 outline-none focus:border-lime-400"
            />

            <Eye
              className="absolute right-4 top-4 text-zinc-500 cursor-pointer"
              size={18}
            />

          </div>

          {/* Button */}

          <button  className="mt-8 w-full bg-lime-400 hover:bg-lime-300 text-black rounded-xl py-4 text-xl font-bold flex items-center justify-center gap-3 transition">

            Sign in

            <ArrowRight size={22} />

          </button>

          <p className="text-center text-zinc-500 mt-8">
            Don't have an account?
            <span onClick={()=>{nav("/Signup")}} className="text-lime-400 font-semibold cursor-pointer ml-2">
              Create one
            </span>
          </p>

        </div>
</form>
      </div>

    </div>
  );
}

export default Login;