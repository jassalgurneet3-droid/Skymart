import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ShoppingCart, LogOut } from "lucide-react";

const Nav = () => {
  let nav = useNavigate();
  let [Active, setActive] = useState("Home");
  const nm = JSON.parse(localStorage.getItem("currentUsers"));

  return (
    <div>
      {/* ================= NAVBAR ================= */}

      <nav className="max-w-[970px] mx-auto h-20 flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <div className="flex items-center gap-2">

          <div className="bg-lime-400 w-7 h-7 rounded-lg flex items-center justify-center">
            <ShoppingBag
              size={15}
              className="text-black"
            />
          </div>

          <h1 className="text-white font-bold text-lg">
            Sky<span className="text-lime-400">Mart</span>
          </h1>

        </div>


        {/* ================= NAVIGATION ================= */}

        <div className="flex items-center gap-6 text-xs">

          <span
            onClick={() => {
              setActive("Home");
              nav("/Home");
            }}
            className={
              Active === "Home"
                ? "text-lime-400 font-semibold cursor-pointer"
                : "text-zinc-500 font-semibold cursor-pointer hover:text-white"
            }
          >
            Home
          </span>


          <span
            onClick={() => {
              nav("/Shop");
              setActive("Shop");
            }}
            className={
              Active === "Shop"
                ? "text-lime-400 font-semibold cursor-pointer"
                : "text-zinc-500 font-semibold cursor-pointer hover:text-white"
            }
          >
            Shop
          </span>


          <button
            onClick={() => {
              nav("/About");
              setActive("About");
            }}
            className={
              Active === "About"
                ? "text-lime-400 font-semibold cursor-pointer"
                : "text-zinc-500 font-semibold cursor-pointer hover:text-white"
            }
          >
            About
          </button>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-2">

          {/* ACCOUNT */}

          <div
            className="
              border
              border-zinc-700
              rounded-xl
              px-3
              py-2
              flex
              items-center
              gap-2
              text-xs
            "
          >

            <div
              className="
                w-5
                h-5
                bg-lime-400
                text-black
                rounded-md
                flex
                items-center
                justify-center
                text-[10px]
                font-bold
              "
            >
               {String(nm.name).slice(0,1).toUpperCase()}
            </div>

            <span className="text-zinc-400">
             {nm.name}
            </span>

          </div>


          {/* ================= CART ================= */}

          <button onClick={()=> nav("/Cart")}
            className="
              w-9
              h-9
              border
              border-zinc-700
              rounded-xl
              flex
              items-center
              justify-center
              text-zinc-400
              hover:text-lime-400
              hover:border-lime-400
              transition
            "
          >
            <ShoppingCart size={15} />
          </button>


          {/* ================= LOGOUT ================= */}

          <button onClick={()=> nav("/")}
            className="
              w-9
              h-9
              border
              border-zinc-700
              rounded-xl
              flex
              items-center
              justify-center
              text-zinc-400
              hover:text-lime-400
              hover:border-lime-400
              transition
            "
          >
            <LogOut size={15} />
          </button>

        </div>

      </nav>

    </div>
  );
};

export default Nav;