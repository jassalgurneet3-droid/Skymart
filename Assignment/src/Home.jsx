import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Zap,
  ShoppingBag,
  TrendingUp,
  Star,
  Tag,
  ArrowRight,
  Package,
  LogOut,
  Shield,
} from "lucide-react";

// =====================================
// CATEGORIES
// =====================================

const categories = [
  {
    icon: "💻",
    name: "Electronics",
    items: "17 items",
  },
  {
    icon: "📦",
    name: "Clothing",
    items: "2 items",
  },
  {
    icon: "📦",
    name: "Furniture",
    items: "3 items",
  },
  {
    icon: "📦",
    name: "Home",
    items: "14 items",
  },
  {
    icon: "📦",
    name: "Sports",
    items: "8 items",
  },
  {
    icon: "📦",
    name: "Accessories",
    items: "6 items",
  },
];

// =====================================
// PRODUCT LIST COMPONENT
// =====================================

const ProductList = ({ title, icon, products }) => {
let nav = useNavigate();

  return (
    <div className="bg-white rounded-[22px] p-5 w-full">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">

        <div className="flex items-center gap-2">
          {icon}

          <h2 className="text-black text-[15px] font-semibold">
            {title}
          </h2>
        </div>

        <button className="text-lime-500 text-[10px] hover:text-lime-600">
          See all →
        </button>

      </div>

      {/* PRODUCT ITEMS */}
      <div className="flex flex-col gap-2">

        {products.map((product) => (
          <div onClick={()=>{nav(`/Products/${product.id}`);
        }}
            key={product.id}
            className="
              h-[59px]
              border
              border-zinc-200
              rounded-[15px]
              flex
              items-center
              px-4
              gap-4
              hover:border-lime-400
              transition-all
            "
          >

            {/* IMAGE */}
            <div
              className="
                w-[32px]
                h-[32px]
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <img
                src={product.image}
                alt={product.title}
                className="
                  w-[30px]
                  h-[30px]
                  object-contain
                "
              />
            </div>

            {/* PRICE */}
            <p
              className="
                text-lime-500
                text-[11px]
                font-medium
                flex-1
              "
            >
              {product.price}
            </p>

            {/* CART BUTTON */}
            <button
              className="
                w-[25px]
                h-[25px]
                rounded-[8px]
                bg-lime-100
                text-lime-500
                flex
                items-center
                justify-center
                hover:bg-lime-400
                hover:text-black
                transition
              "
            >
              <ShoppingBag size={12} />
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

// =====================================
// HOME
// =====================================

const Home = () => {
  let nav = useNavigate();
const nm = JSON.parse(localStorage.getItem("currentUsers"));
  const [products, setProducts] = useState([]);

  // =====================================
  // GET PRODUCTS
  // =====================================

  useEffect(() => {

    const getProducts = async () => {
      try {

        const res = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setProducts(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    getProducts();

  }, []);

  // =====================================
  // TOP RATED
  // =====================================

  const topRated = products
    .filter(
      (product) => product.rating?.rate >= 4
    )
    .slice(0, 5);

  // =====================================
  // NEW ARRIVALS
  // =====================================

  const newArrivals = products.slice(0, 5);

  return (

    <div className="min-h-screen bg-[#0b0b0b] text-white">

 

      {/* ================= MAIN ================= */}

      <main className="max-w-[970px] mx-auto">

        {/* ================= HERO ================= */}

        <section
          className="
            mt-5
            min-h-[290px]
            border
            border-zinc-600
            rounded-[20px]
            relative
            overflow-hidden
            p-10
          "
        >

          {/* GRID BACKGROUND */}
          <div
            className="
              absolute
              inset-0
              opacity-20
              pointer-events-none
              bg-[linear-gradient(#303030_1px,transparent_1px),linear-gradient(90deg,#303030_1px,transparent_1px)]
              bg-[size:32px_32px]
            "
          ></div>

          {/* HERO CONTENT */}
          <div className="relative z-10">

            <p
              className="
                text-lime-400
                text-xs
                font-semibold
                tracking-wide
              "
            >
              GOOD EVENING 👋
            </p>

            <h1
              className="
                text-4xl
                font-bold
                leading-[1.05]
                mt-3
              "
            >
              Welcome back,
              <br />

              <span className="text-lime-400">
              hii, {nm.name}
              </span>
            </h1>

            <p
              className="
                text-zinc-500
                text-sm
                max-w-[380px]
                mt-4
                leading-5
              "
            >
              Discover today's picks — hand-curated products across
              electronics, fashion, and more.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-2 mt-5">

              <button onClick={()=> nav("/Cart")}
                className="
                  bg-lime-400
                  text-black
                  px-5
                  py-3
                  rounded-xl
                  text-xs
                  font-semibold
                  flex
                  items-center
                  gap-2
                  hover:bg-lime-300
                "
              >
                Shop Now
                <ArrowRight size={15} />
              </button>

              <button onClick={()=> nav("/Shop")}
                className="
                  border
                  border-zinc-700
                  px-5
                  py-3
                  rounded-xl
                  text-xs
                  font-semibold
                  text-zinc-400
                  hover:text-white
                "
              >
                View All Products
              </button>

            </div>

          </div>

          {/* HERO STATS */}
          <div
            className="
              absolute
              right-10
              top-16
              flex
              flex-col
              gap-2
            "
          >

            {/* PRODUCTS */}
            <div
              className="
                w-[123px]
                h-[77px]
                rounded-xl
                border
                border-lime-500/40
                bg-lime-400/10
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <h2
                className="
                  text-lime-400
                  text-2xl
                  font-bold
                "
              >
                {products.length}+
              </h2>

              <p className="text-zinc-500 text-[9px]">
                Products Available
              </p>
            </div>

            {/* FREE DELIVERY */}
            <div
              className="
                w-[123px]
                h-[70px]
                rounded-xl
                border
                border-zinc-500
                flex
                flex-col
                items-center
                justify-center
              "
            >
              <h2 className="text-white text-xl font-bold">
                Free
              </h2>

              <p className="text-zinc-500 text-[9px]">
                Delivery on ₹999+
              </p>
            </div>

          </div>

        </section>

        {/* ================= STAT CARDS ================= */}

        <section
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
            mt-8
          "
        >

          {/* CART ITEMS */}
          <div
            className="
              h-[95px]
              border
              border-zinc-600
              rounded-[20px]
              flex
              items-center
              gap-4
              px-5
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-lime-400/10
                text-lime-400
                flex
                items-center
                justify-center
              "
            >
              <Package size={19} />
            </div>

            <div>

              <h2 className="text-white text-lg font-bold">
                0
              </h2>

              <p className="text-zinc-400 text-xs">
                Cart Items
              </p>

              <p className="text-zinc-600 text-[9px]">
                In your bag
              </p>

            </div>

          </div>

          {/* CART VALUE */}
          <div
            className="
              h-[95px]
              border
              border-zinc-600
              rounded-[20px]
              flex
              items-center
              gap-4
              px-5
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-blue-500/10
                text-blue-400
                flex
                items-center
                justify-center
              "
            >
              <TrendingUp size={19} />
            </div>

            <div>

              <h2 className="text-white text-lg font-bold">
                $0.00
              </h2>

              <p className="text-zinc-400 text-xs">
                Cart Value
              </p>

              <p className="text-zinc-600 text-[9px]">
                Ready to checkout
              </p>

            </div>

          </div>

          {/* TOP PRODUCTS */}
          <div
            className="
              h-[95px]
              border
              border-zinc-600
              rounded-[20px]
              flex
              items-center
              gap-4
              px-5
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-yellow-500/10
                text-yellow-400
                flex
                items-center
                justify-center
              "
            >
              <Star size={19} />
            </div>

            <div>

              <h2 className="text-white text-lg font-bold">
                {topRated.length}
              </h2>

              <p className="text-zinc-400 text-xs">
                Top Products
              </p>

              <p className="text-zinc-600 text-[9px]">
                Highly rated
              </p>

            </div>

          </div>

          {/* CATEGORIES */}
          <div
            className="
              h-[95px]
              border
              border-zinc-600
              rounded-[20px]
              flex
              items-center
              gap-4
              px-5
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-purple-500/10
                text-purple-400
                flex
                items-center
                justify-center
              "
            >
              <Tag size={19} />
            </div>

            <div>

              <h2 className="text-white text-lg font-bold">
                {categories.length}
              </h2>

              <p className="text-zinc-400 text-xs">
                Categories
              </p>

              <p className="text-zinc-600 text-[9px]">
                To explore
              </p>

            </div>

          </div>

        </section>

        {/* =================================
            SHOP BY CATEGORY
        ================================= */}

        <section className="mt-8">

          {/* TITLE */}
          <div
            className="
              flex
              justify-between
              items-center
              mb-5
            "
          >

            <h2
              className="
                text-white
                text-[16px]
                font-semibold
              "
            >
              Shop by Category
            </h2>

            <button
              className="
                text-lime-400
                text-[10px]
                font-medium
              "
            >
              View All →
            </button>

          </div>

          {/* CATEGORY GRID */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-3
            "
          >

            {categories.map((category) => (

              <div
                key={category.name}
                className="
                  bg-white
                  rounded-[15px]
                  h-[105px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  cursor-pointer
                  hover:scale-[1.02]
                  transition
                "
              >

                {/* ICON */}
                <div
                  className="
                    text-[22px]
                    mb-2
                  "
                >
                  {category.icon}
                </div>

                {/* NAME */}
                <h3
                  className="
                    text-black
                    text-[11px]
                    font-medium
                  "
                >
                  {category.name}
                </h3>

                {/* ITEM COUNT */}
                <p
                  className="
                    text-zinc-400
                    text-[9px]
                    mt-1
                  "
                >
                  {category.items}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* =================================
            TOP RATED + NEW ARRIVALS
        ================================= */}

        <section
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            mt-8
          "
        >

          {/* TOP RATED */}
          <ProductList
            title="Top Rated"
            icon={
              <Star
                size={16}
                className="
                  text-yellow-400
                  fill-yellow-400
                "
              />
            }
            products={topRated}
          />

          {/* NEW ARRIVALS */}
          <ProductList
            title="New Arrivals"
            icon={
              <Zap
                size={16}
                className="
                  text-lime-400
                  fill-lime-400
                "
              />
            }
            products={newArrivals}
          />

        </section>

        {/* =================================
            BOTTOM FEATURES
        ================================= */}

        <section
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-3
            mt-8
          "
        >

          {/* FAST DELIVERY */}
          <div
            className="
              h-[75px]
              border
              border-zinc-500
              rounded-[15px]
              flex
              items-center
              gap-4
              px-5
            "
          >

            <Zap
              size={24}
              className="text-lime-400"
            />

            <div>

              <h3
                className="
                  text-white
                  text-[12px]
                  font-semibold
                "
              >
                Fast Delivery
              </h3>

              <p
                className="
                  text-zinc-500
                  text-[9px]
                  mt-1
                "
              >
                Same-day on select items
              </p>

            </div>

          </div>

          {/* SECURE PAYMENTS */}
          <div
            className="
              h-[75px]
              border
              border-zinc-500
              rounded-[15px]
              flex
              items-center
              gap-4
              px-5
            "
          >

            <Shield
              size={23}
              className="text-blue-400"
            />

            <div>

              <h3
                className="
                  text-white
                  text-[12px]
                  font-semibold
                "
              >
                Secure Payments
              </h3>

              <p
                className="
                  text-zinc-500
                  text-[9px]
                  mt-1
                "
              >
                100% encrypted checkout
              </p>

            </div>

          </div>

          {/* BEST PRICES */}
          <div
            className="
              h-[75px]
              border
              border-zinc-500
              rounded-[15px]
              flex
              items-center
              gap-4
              px-5
            "
          >

            <Tag
              size={23}
              className="text-green-400"
            />

            <div>

              <h3
                className="
                  text-white
                  text-[12px]
                  font-semibold
                "
              >
                Best Prices
              </h3>

              <p
                className="
                  text-zinc-500
                  text-[9px]
                  mt-1
                "
              >
                Price-match guarantee
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer
        className="
          border-t
          border-zinc-700
          mt-20
          py-8
          text-center
        "
      >

        <h2
          className="
            text-lime-400
            text-[17px]
            font-semibold
          "
        >
          SkyMart
        </h2>

        <p
          className="
            text-zinc-600
            text-[10px]
            mt-3
          "
        >
          © 2025 SkyMart • Built with React • Redux + TanStack Query
        </p>

      </footer>

    </div>
  );
};

export default Home;