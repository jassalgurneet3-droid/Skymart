import React, { useEffect, useState } from "react";
import {
  ShoppingBag,
  X,
  Trash2,
  Minus,
  Plus
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Cart = ({ product, setPrd }) => {
  let [quantity, setQunatity] = useState(1);
  let nav = useNavigate();


  // TOTAL PRICE
  const total = Array.isArray(product)? product.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0) : 0;


  return (

    <div className="fixed inset-0 z-50">

      {/* 80% BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          right-[20%]
          bg-black/70
          backdrop-blur-[6px]
        "
      />


      {/* CART */}
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-[20%]
          min-w-[320px]
          bg-[#111111]
          text-white
          border-l
          border-[#333]
          flex
          flex-col
        "
      >


        {/* HEADER */}
        <div
          className="
            flex
            h-[70px]
            shrink-0
            items-center
            justify-between
            border-b
            border-[#444]
            px-5
          "
        >

          <div className="flex items-center gap-3">

            <ShoppingBag
              size={20}
              className="text-lime-400"
            />

            <h2 className="text-[16px] font-semibold">
              Cart
            </h2>

            {/* ITEM COUNT */}
            <span
              className="
                bg-lime-400/20
                text-lime-400
                px-2
                py-1
                rounded-full
                text-[10px]
                font-semibold
              "
            >
              {product.length} items
            </span>

          </div>


          {/* CLOSE */}
          <button
            onClick={() => nav("/Shop")}
            className="
              text-gray-400
              transition
              hover:text-white
            "
          >
            <X size={20} />
          </button>

        </div>


        {/* PRODUCTS */}
        <div
          className="
            flex-1
            overflow-y-auto
            p-4
          "
        >

          {product.length === 0 ? (

            /* EMPTY CART */
            <div
              className="
                h-full
                flex
                flex-col
                items-center
                justify-center
              "
            >

              <div
                className="
                  mb-4
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#333]
                  bg-[#191919]
                "
              >

                <ShoppingBag
                  size={30}
                  className="text-gray-500"
                />

              </div>


              <h3 className="text-[14px] font-medium">
                Cart is empty
              </h3>


              <p className="mt-2 text-[12px] text-gray-500">
                Go shop something cool!
              </p>


              <button
                onClick={() => nav("/Shop")}
                className="
                  mt-5
                  rounded-xl
                  bg-lime-400
                  px-5
                  py-3
                  text-[12px]
                  font-semibold
                  text-black
                  hover:bg-lime-300
                "
              >
                Browse Products
              </button>

            </div>

          ) : (

            /* PRODUCT LIST */
            <div className="space-y-3">

              {product.map((item, index) => (

                <div
                  key={`${item.id}-${index}`}
                  className="
                    border
                    border-zinc-300
                    rounded-2xl
                    p-3
                    bg-[#111111]
                  "
                >

                  <div className="flex gap-3">

                    {/* IMAGE */}
                    <div
                      className="
                        w-[62px]
                        h-[62px]
                        shrink-0
                        bg-white
                        rounded-xl
                        p-2
                      "
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-full
                          h-full
                          object-contain
                        "
                      />

                    </div>


                    {/* DETAILS */}
                    <div className="flex-1 min-w-0">

                      <h3
                        className="
                          text-[12px]
                          font-semibold
                          text-zinc-200
                          line-clamp-1
                        "
                      >
                        {item.title}
                      </h3>


                      {/* PRICE */}
                      <p
                        className="
                          text-lime-400
                          font-bold
                          text-[13px]
                          mt-1
                        "
                      >
                        ${item.price}
                      </p>


                      <p
                        className="
                          text-[10px]
                          text-zinc-600
                        "
                      >
                        ${item.price} each
                      </p>


                      {/* QUANTITY */}
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          mt-2
                        "
                      >

                        <button
                          className="
                            w-6
                            h-6
                            rounded-md
                            border
                            border-zinc-700
                            flex
                            items-center
                            justify-center
                            text-zinc-400
                          "
                        >
                          <Minus onClick={()=>
                          setPrd((prev)=>{
                              return prev.map((elem)=>{
                                return elem.id===item.id ? {...elem, quantity:elem.quantity-1} : elem;
                              })

                              .filter((elem)=> elem.quantity>0);
                          })
                        } 
                          size={12} />
                        </button>


                        <span className="text-[12px]">
                          {item.quantity}                        
                        </span>


                        <button
                          className="
                            w-6
                            h-6
                            rounded-md
                            border
                            border-zinc-700 
                            flex
                            items-center
                            justify-center
                            text-zinc-400
                          "
                        >
                          <Plus onClick={()=>
                                          setPrd((prev)=>{
                                           return prev.map((elem)=>{
                                             return elem.id===item.id ? {...elem, quantity:elem.quantity+1} : elem;
                                            });
                                          })
                          }
                          size={12} />
                        </button>

                      </div>

                    </div>


                    {/* DELETE */}
                    <button
                      onClick={() =>
                        removeProduct(item.id)
                      }
                      className="
                        self-end
                        text-red-500
                        hover:text-red-400
                      "
                    >
                      <Trash2 size={14} />
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* BOTTOM */}
        {product.length > 0 && (

          <div
            className="
              shrink-0
              border-t
              border-[#444]
              p-5
            "
          >

            {/* TOTAL */}
            <div
              className="
                flex
                items-center
                justify-between
                mb-4
              "
            >

              <span className="text-[12px] text-zinc-400">
                Total
              </span>

              <span
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                ${total.toFixed(3)}
              </span>

            </div>


            {/* CHECKOUT */}
            <button
              className="
                w-full
                rounded-xl
                bg-lime-400
                py-3
                text-sm
                font-semibold
                text-black
                hover:bg-lime-300
                transition
              "
            >
              Checkout →
            </button>


            {/* CLEAR */}
            <button onClick={()=> setPrd([])}
              className="
                w-full
                mt-4
                text-[10px]
                text-zinc-600
                hover:text-red-400
              "
            >
              Clear cart
            </button>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;