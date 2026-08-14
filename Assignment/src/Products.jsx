import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [full, setFull] = useState([]);
  const { id } = useParams();


  // ================= GET SINGLE PRODUCT =================
  const single = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const all = async () => {
    let result = await axios.get(`https://fakestoreapi.com/products`)
    console.log(result.data);
    setFull(result.data);
  }
  

  useEffect(() => {
    all();
    single();
  }, [id]);
  let nav = useNavigate();
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ================= MAIN PRODUCT SECTION ================= */}
      <div className="w-full max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-12">

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* ================================================= */}
          {/* LEFT SIDE - PRODUCT IMAGE */}
          {/* ================================================= */}

          <div className="flex justify-center">

            <div
              className="
                bg-white
                rounded-[22px]
                w-full
                h-[430px]
                md:h-[480px]
                flex
                items-center
                justify-center
                p-8
                shadow-lg
              "
            >

              <img
                src={data.image}
                alt={data.title}
                className="
                  w-full
                  h-full
                  object-contain
                  transition
                  duration-500
                  hover:scale-105
                "
              />

            </div>

          </div>


          {/* ================================================= */}
          {/* RIGHT SIDE - PRODUCT INFORMATION */}
          {/* ================================================= */}

          <div className="flex flex-col pt-1">

            {/* ================= CATEGORY ================= */}

            <span
              className="
                bg-[#bfff00]/10
                border
                border-[#bfff00]/30
                text-[#bfff00]
                px-3
                py-1
                rounded-full
                w-fit
                text-xs
                font-medium
                capitalize
                mb-4
              "
            >
              {data.category}
            </span>


            {/* ================= TITLE ================= */}

            <h1
              className="
                text-1xl
                md:text-2xl
                font-bold
                leading-tight
                max-w-xl
              "
            >
              {data.title}
            </h1>


            {/* ================= RATING ================= */}

            <div className="flex items-center gap-3 mt-4">

              <div className="text-[#bfff00] text-lg tracking-wide">
                ★★★★★
              </div>

              <span className="text-gray-400 text-sm">
                {data.rating?.rate}
              </span>

              <span className="text-gray-500 text-sm">
                ({data.rating?.count} reviews)
              </span>

            </div>


            {/* ================= DIVIDER ================= */}

            <div className="border-t border-gray-700 mt-5" />


            {/* ================= PRICE ================= */}

            <div className="mt-5">

              <h2 className="text-2xl font-bold text-[#bfff00]">
                ${data.price}
              </h2>

            </div>


            {/* ================= DESCRIPTION ================= */}

            <div className="border-t border-gray-700 mt-5 pt-5">

              <p
                className="
                  text-grey-400
                  text-xs
                  leading-6
                  max-w-xl
                "
              >
                {data.description}
              </p>

            </div>


            {/* ================================================= */}
            {/* ADD TO CART + WISHLIST */}
            {/* ================================================= */}

            <div className="flex gap-3 mt-6">

              <button
                className="
                  flex-1
                  bg-[#bfff00]
                  text-black
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-[#aee600]
                  transition
                  duration-300
                "
              >
                🛒 Add to Cart
              </button>


              <button
                className="
                  w-14
                  border
                  border-gray-700
                  rounded-xl
                  text-sm
                  text-gray-400
                  hover:text-[#bfff00]
                  hover:border-[#bfff00]
                  transition
                  duration-300
                "
              >
                ♡
              </button>

            </div>


            {/* ================================================= */}
            {/* FEATURES */}
            {/* ================================================= */}

            <div className="grid grid-cols-3 gap-3 mt-6">

              {/* FREE DELIVERY */}

              <div
                className="
                  border
                  border-gray-700
                  rounded-xl
                  p-3
                  md:p-4
                  text-center
                  hover:border-[#bfff00]/50
                  transition
                "
              >

                <div className="text-[#bfff00] text-lg">
                  ♧
                </div>

                <p className="text-xs font-medium mt-2">
                  Free Delivery
                </p>

                <p className="text-[10px] text-gray-500 mt-1">
                  On orders $50+
                </p>

              </div>


              {/* SECURE PAYMENT */}

              <div
                className="
                  border
                  border-gray-700
                  rounded-xl
                  p-3
                  md:p-4
                  text-center
                  hover:border-[#bfff00]/50
                  transition
                "
              >

                <div className="text-[#bfff00] text-lg">
                  ♢
                </div>

                <p className="text-xs font-medium mt-2">
                  Secure Pay
                </p>

                <p className="text-[10px] text-gray-500 mt-1">
                  256-bit SSL
                </p>

              </div>


              {/* EASY RETURNS */}

              <div
                className="
                  border
                  border-gray-700
                  rounded-xl
                  p-3
                  md:p-4
                  text-center
                  hover:border-[#bfff00]/50
                  transition
                "
              >

                <div className="text-[#bfff00] text-lg">
                  ↩
                </div>

                <p className="text-xs font-medium mt-2">
                  Easy Returns
                </p>

                <p className="text-[10px] text-gray-500 mt-1">
                  30-day policy
                </p>

              </div>

            </div>


            {/* ================================================= */}
            {/* NEXT BUTTON */}
            {/* ================================================= */}

            
          </div>

        </div>

      </div>


{/* ================= RELATED PRODUCTS ================= */}

<div className="mt-20  flex flex-wrap gap-5 ml-100 mr-100 mb-25">

  {/* Heading */}
  <h2 className="text-2xl font-bold mb-6 ">
    Related Products
  </h2>


  {/* Cards Container */}
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">

    {full.map((val) => {
       if(val.category === data.category && val.id !== data.id){
          return(
    <div
      className="
        bg-[#111111]
        border border-gray-800
        rounded-2xl
        overflow-hidden
        hover:border-[#bfff00]
        transition duration-300
      "
    >

      {/* IMAGE */}

      <div
        className="
          bg-white
          h-44
          p-5
          flex
          items-center
          justify-center
        "
      >
        <img onClick={()=> nav(`/Products/${val.id}`)}
          src={val.image}
          alt="PRODUCT"
          className="
            w-full
            h-full
            object-contain
            hover:scale-105
            transition
            duration-300
          "
        />
      </div>


      {/* PRODUCT DETAILS */}

      <div className="p-3">

        {/* CATEGORY */}

        <p className="text-xs text-gray-500 capitalize mb-2">
          {val.category}
        </p>


        {/* TITLE */}

        <h3 className="text-sm font-semibold text-white truncate">
        {val.title}
        </h3>


        {/* RATING */}

        <div className="flex items-center gap-2 mt-2">

          <span className="text-[#bfff00] text-xs">
            ★★★★★
          </span>

          <span className="text-xs text-gray-500">
            (95)
          </span>

        </div>


        {/* DIVIDER */}

        <div className="border-t border-gray-700 mt-2" />


        {/* PRICE + BUTTON */}

        <div className="flex items-center justify-between mt-3">

          <span className="text-[#bfff00] font-bold text-sm">
            {val.price}
          </span>

          <button
            className="
              bg-[#bfff00]
              text-black
              px-3
              py-1.5
              rounded-lg
              text-xs
              font-semibold
              hover:bg-[#aee600]
              transition
            "
          >
            🛒 Add
          </button>

        </div>

      </div>

    </div>
 );

            }

            return null;

          })}

        </div>

      </div>

    </div>
  );
};

export default Products;