import React, { useEffect, useState } from "react";
import { Filter, Hand, Search, ShoppingCart, Star } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Shop = ({setPrd}) => {

    let nav = useNavigate();
    let[search, setSearch] = useState("");
    let[Product, setProduct]=useState([]);
    let[Category, setCategory]=useState("");
    let[add, setAdd]=useState([]);

    console.log(Category);
    
    let filter = Product.filter((val)=>
      val.title.toLowerCase().includes(search.toLowerCase()) &&
      (Category==="" || Category==="all categories" || val.category===Category)
    );
    
    console.log(filter);
  

    let prd = async()=>{
        let res = await axios.get("https://fakestoreapi.com/products");
         
    let productQuantity =  res.data.map((item)=>{
            return ({...item, quantity:1})
        })  
    
        setProduct(productQuantity);
      }

    useEffect(()=>{
        prd();
        },[])

  return (
    
    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-10">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1250px] mx-auto">

        {/* PAGE TITLE */}
        <div className="mb-7">
          <h1 className="text-4xl font-bold">
            All Products
          </h1>

          <p className="text-zinc-500 mt-2">
            {/* {products.length} products found */}
          </p>
        </div>


        {/* SEARCH + FILTER */}
        <div className="border border-zinc-600 rounded-2xl p-3 mb-5 flex gap-3">

          {/* SEARCH */}
          <div className="relative flex-1">

            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
            />

            <input onChange={(e)=>{setSearch(e.target.value)}
            }
              type="text"
              placeholder="Search products..."
              className="
                w-full
                bg-[#1b1b1b]
                border border-zinc-700
                rounded-xl
                py-3
                pl-11
                pr-4
                outline-none
                text-sm
                placeholder:text-zinc-600
                focus:border-lime-400
              "
            />

          </div>


          {/* CATEGORY */}
          <select onClick={(e)=>setCategory(e.target.value)
          }
            className="
              w-36
              bg-[#1b1b1b]
              border border-zinc-700
              rounded-xl
              px-4
              text-sm
              outline-none
            "
          >
            <option value = "all categories" >All Categories</option>
            <option value = "electronics">Electronics</option>
            <option value = "men's clothing">Men's Clothing</option>
            <option value = "women's clothing">Women's Clothing</option>
            <option value = "jewelery">Jewellery</option>
          </select>


          {/* SORT */}
          <select
            className="
              w-36
              bg-[#1b1b1b]
              border border-zinc-700
              rounded-xl
              px-4
              text-sm
              outline-none
            "
          >
            <option>Featured</option>
            <option>Price Low</option>
            <option>Price High</option>
            <option>Rating</option>
          </select>

        </div>


        {/* PRODUCT GRID */}
        
        <div className="grid grid-cols-5 gap-4">
        
          {filter.map((product) => (

            <div
              key={product.id}
              className="
                bg-[#111111]
                border border-zinc-800
                rounded-2xl
                overflow-hidden
                hover:border-lime-400/60
                transition
                duration-300
              "
            >

              {/* IMAGE SECTION */}

              <div className="bg-white h-[190px] p-5 relative">

                {/* CATEGORY BADGE */}

                <span
                  className="
                    absolute
                    top-3
                    left-3
                    bg-zinc-600
                    text-white
                    text-[10px]
                    px-2
                    py-1
                    rounded-full
                  "
                >
                  {product.category}
                </span>


                {/* PRODUCT IMAGE */}
             
                <img onClick={()=> nav(`/Products/${product.id}`)}
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full
                    h-full
                    object-contain
                  "
                />

              </div>


              {/* PRODUCT DETAILS */}

              <div className="p-4">

                {/* CATEGORY */}

                <p className="text-[11px] text-zinc-600 mb-2">
                  {product.category}
                </p>


                {/* TITLE */}

                <h2
                  className="
                    text-sm
                    font-semibold
                    text-zinc-200
                    line-clamp-2
                    min-h-[40px]
                  "
                >
                  {product.title}
                </h2>


                {/* RATING */}

                <div className="flex items-center gap-1 mt-3">

                  <div className="flex">

                    {[1, 2, 3, 4, 5].map((star) => (

                      <Star
                        key={star}
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />

                    ))}

                  </div>

                  <span className="text-[10px] text-zinc-600">
                    ({product.rating?.count || 0})
                  </span>

                </div>


                {/* LINE */}

                <div className="border-t border-zinc-700 my-3"></div>


                {/* PRICE + BUTTON */}

                <div className="flex items-center justify-between">

                  <p className="text-lime-400 font-bold text-lg">
                    ${product.price}
                  </p>

                  <button  onClick={()=> 
                  {setAdd((prev)=>[...prev, product.id]);
                    setPrd((prev)=>[...prev, product]);
                  nav("/Cart"); 
                  }
                    }
                    className="
                      flex
                      items-center
                      gap-1
                      bg-lime-400
                      hover:bg-lime-300
                      text-black
                      px-3
                      py-2
                      rounded-xl
                      text-xs
                      font-semibold
                      transition
                    "
                  >
                    <ShoppingCart size={13} />
                     {add.includes(product.id)? "Added ✅": "Add"} 
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Shop;