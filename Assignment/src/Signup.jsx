import {
  ArrowRight,
  Bolt,
  Eye,
  Lock,
  LogIn,
  Mail,
  User,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup({user}) {
  let [input, setInput] = useState({
    name: "",
    email: "" ,
    psw:"",
    confirm:""
});
  
  let nav = useNavigate();

  const change = (e)=>{
    let{name,value} = e.target;
    setInput({...input, [name] : value})
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4">

<form onSubmit={(e)=>{
  e.preventDefault(); 
    
  if (input.psw !== input.confirm) {
      alert("Password does not match");
      return;
    }

    user(input)
    
  const old = JSON.parse(localStorage.getItem("users")) || [];
  const neww = [...old, input];
  localStorage.setItem("users", JSON.stringify(neww));
  alert("Signup Successful!");
}

}>
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-5">
          <div className="bg-lime-400 p-1.5 rounded-lg">
            <Bolt size={16} className="text-black fill-black" />
          </div>

          <h1 className="text-2xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Card */}
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl shadow-2xl p-6">

          <h2 className="text-2xl font-bold text-white">
            Create account
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Join SkyMart and start shopping
          </p>

          {/* Full Name */}
          <div className="relative mt-6">
            <User
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
            name="name"
             value ={input.name}
             onChange={change}
              type="text" 
              placeholder="Full name"
              className="w-full h-11 bg-[#1c1c1c] border border-[#333] rounded-lg pl-10 pr-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-lime-400 transition"
            />
          </div>

          {/* Email */}
          <div className="relative mt-3">
            <Mail
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              name="email"
              value={input.email}
              onChange={change}
              type="email"
              placeholder="Email address"
              className="w-full h-11 bg-[#1c1c1c] border border-[#333] rounded-lg pl-10 pr-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-lime-400 transition"
            />
          </div>

          {/* Password */}
          <div className="relative mt-3">
            <Lock
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
            name="psw"
            value={input.psw}
            onChange={change}
              type="password"
              placeholder="Password"
              className="w-full h-11 bg-[#1c1c1c] border border-[#333] rounded-lg pl-10 pr-10 text-sm text-white placeholder:text-gray-500 outline-none focus:border-lime-400 transition"
            />

            <Eye
              size={16}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative mt-3">
            <Lock
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              name="confirm"
              value={input.confirm}
              onChange={change}
              type="password"
              placeholder="Confirm password"
              className="w-full h-11 bg-[#1c1c1c] border border-[#333] rounded-lg pl-10 pr-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-lime-400 transition"
            />
          </div>

          {/* Button */}
          <button className="w-full mt-5 h-11 rounded-lg bg-lime-400 hover:bg-lime-300 transition flex items-center justify-center gap-2 font-bold text-base text-black">
            Create Account
            <ArrowRight size={18} />
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            Already have an account?
            <span
              onClick={() => nav("/")}
              className="text-lime-400 font-semibold cursor-pointer ml-1"
            >
              Sign in
            </span>
          </p>

        </div>
      </div>
</form>
    </div>
  );
}
