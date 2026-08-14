import React from "react";

import {
  Zap,
  ShieldCheck,
  Truck,
  Heart,
  Star,
  ArrowRight,
  Users,
  Package,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
let nav = useNavigate();
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ================= MAIN CONTAINER ================= */}

      <main className="max-w-[1100px] mx-auto px-5 py-10">

        {/* ================= LOGO ================= */}

        <div className="flex justify-center mb-7">

          <div
            className="
              w-11
              h-11
              bg-lime-400
              rounded-xl
              flex
              items-center
              justify-center
            "
          >
            <Zap
              size={23}
              className="text-black fill-black"
            />
          </div>

        </div>

        {/* ================= ABOUT TITLE ================= */}

        <section className="text-center">

          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p
            className="
              text-zinc-500
              text-sm
              md:text-base
              max-w-[600px]
              mx-auto
              mt-4
              leading-7
            "
          >
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>

        </section>

        {/* ================= STATS ================= */}

        <section
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-3
            md:gap-4
            max-w-[650px]
            mx-auto
            mt-10
          "
        >

          {/* PRODUCTS */}

          <div
            className="
              h-[90px]
              border
              border-zinc-600
              rounded-2xl
              flex
              flex-col
              items-center
              justify-center
              hover:border-lime-400
              transition
            "
          >

            <Package
              size={20}
              className="text-lime-400 mb-2"
            />

            <h2 className="text-xl font-bold">
              20K+
            </h2>

            <p className="text-[10px] text-zinc-500">
              Products
            </p>

          </div>

          {/* CUSTOMERS */}

          <div
            className="
              h-[90px]
              border
              border-zinc-600
              rounded-2xl
              flex
              flex-col
              items-center
              justify-center
              hover:border-lime-400
              transition
            "
          >

            <Users
              size={20}
              className="text-lime-400 mb-2"
            />

            <h2 className="text-xl font-bold">
              50K+
            </h2>

            <p className="text-[10px] text-zinc-500">
              Happy Customers
            </p>

          </div>

          {/* RATING */}

          <div
            className="
              h-[90px]
              border
              border-zinc-600
              rounded-2xl
              flex
              flex-col
              items-center
              justify-center
              hover:border-lime-400
              transition
            "
          >

            <Star
              size={20}
              className="text-lime-400 mb-2"
            />

            <h2 className="text-xl font-bold">
              4.9
            </h2>

            <p className="text-[10px] text-zinc-500">
              Avg. Rating
            </p>

          </div>

          {/* DELIVERY */}

          <div
            className="
              h-[90px]
              border
              border-zinc-600
              rounded-2xl
              flex
              flex-col
              items-center
              justify-center
              hover:border-lime-400
              transition
            "
          >

            <Truck
              size={20}
              className="text-lime-400 mb-2"
            />

            <h2 className="text-xl font-bold">
              99%
            </h2>

            <p className="text-[10px] text-zinc-500">
              On-time Delivery
            </p>

          </div>

        </section>

        {/* ================= OUR STORY ================= */}

        <section
          className="
            border
            border-zinc-600
            rounded-2xl
            p-7
            md:p-8
            mt-10
            hover:border-zinc-500
            transition
          "
        >

          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              mb-5
            "
          >
            Our Story
          </h2>

          <p
            className="
              text-zinc-500
              text-sm
              md:text-base
              leading-7
            "
          >
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked ourselves:
            what if shopping online was actually enjoyable?
          </p>

          <p
            className="
              text-zinc-500
              text-sm
              md:text-base
              leading-7
              mt-4
            "
          >
            Three years later, SkyMart serves over 50,000 customers across the
            country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don't require a second mortgage.
          </p>

          <p
            className="
              text-zinc-500
              text-sm
              md:text-base
              leading-7
              mt-4
            "
          >
            We're still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you
            make here.
          </p>

        </section>

        {/* ================= WHAT WE STAND FOR ================= */}

        <section className="mt-10">

          <h2
            className="
              text-center
              text-xl
              md:text-2xl
              font-bold
              mb-6
            "
          >
            What We Stand For
          </h2>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
            "
          >

            {/* TRUST */}

            <div
              className="
                border
                border-zinc-600
                rounded-2xl
                p-5
                flex
                gap-4
                hover:border-lime-400
                transition
              "
            >

              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-xl
                  bg-lime-400/10
                  flex
                  items-center
                  justify-center
                "
              >
                <ShieldCheck
                  size={21}
                  className="text-lime-400"
                />
              </div>

              <div>

                <h3 className="text-base font-semibold">
                  Trust
                </h3>

                <p
                  className="
                    text-zinc-500
                    text-sm
                    leading-6
                    mt-2
                  "
                >
                  Every product is verified for quality and authenticity
                  before listing.
                </p>

              </div>

            </div>

            {/* SPEED */}

            <div
              className="
                border
                border-zinc-600
                rounded-2xl
                p-5
                flex
                gap-4
                hover:border-lime-400
                transition
              "
            >

              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-xl
                  bg-lime-400/10
                  flex
                  items-center
                  justify-center
                "
              >

                <Truck
                  size={21}
                  className="text-lime-400"
                />

              </div>

              <div>

                <h3 className="text-base font-semibold">
                  Speed
                </h3>

                <p
                  className="
                    text-zinc-500
                    text-sm
                    leading-6
                    mt-2
                  "
                >
                  We obsess over delivery times so your orders arrive
                  when promised.
                </p>

              </div>

            </div>

            {/* COMMUNITY */}

            <div
              className="
                border
                border-zinc-600
                rounded-2xl
                p-5
                flex
                gap-4
                hover:border-lime-400
                transition
              "
            >

              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-xl
                  bg-lime-400/10
                  flex
                  items-center
                  justify-center
                "
              >

                <Heart
                  size={21}
                  className="text-lime-400"
                />

              </div>

              <div>

                <h3 className="text-base font-semibold">
                  Community
                </h3>

                <p
                  className="
                    text-zinc-500
                    text-sm
                    leading-6
                    mt-2
                  "
                >
                  Built around customer feedback, not just business
                  metrics.
                </p>

              </div>

            </div>

            {/* QUALITY */}

            <div
              className="
                border
                border-zinc-600
                rounded-2xl
                p-5
                flex
                gap-4
                hover:border-lime-400
                transition
              "
            >

              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-xl
                  bg-lime-400/10
                  flex
                  items-center
                  justify-center
                "
              >

                <Star
                  size={21}
                  className="text-lime-400"
                />

              </div>

              <div>

                <h3 className="text-base font-semibold">
                  Quality
                </h3>

                <p
                  className="
                    text-zinc-500
                    text-sm
                    leading-6
                    mt-2
                  "
                >
                  We curate the best — no filler, no junk, just great
                  products.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= TEAM ================= */}

        <section className="mt-10">

          <h2
            className="
              text-center
              text-xl
              md:text-2xl
              font-bold
              mb-6
            "
          >
            Meet the Team
          </h2>

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
            "
          >

            {/* ARYAN */}

            <div
              className="
                border
                border-zinc-600
                rounded-2xl
                h-[110px]
                flex
                flex-col
                items-center
                justify-center
                hover:border-lime-400
                transition
              "
            >

              <div
                className="
                  w-10
                  h-10
                  bg-lime-400
                  text-black
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-base
                  font-bold
                  mb-2
                "
              >
                A
              </div>

              <h3 className="text-sm font-semibold">
                Aryan Shah
              </h3>

              <p className="text-[9px] text-zinc-500">
                Founder & CEO
              </p>

            </div>

            {/* PRIYA */}

            <div
              className="
                border
                border-zinc-600
                rounded-2xl
                h-[110px]
                flex
                flex-col
                items-center
                justify-center
                hover:border-lime-400
                transition
              "
            >

              <div
                className="
                  w-10
                  h-10
                  bg-blue-500
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-base
                  font-bold
                  mb-2
                "
              >
                P
              </div>

              <h3 className="text-sm font-semibold">
                Priya Mehta
              </h3>

              <p className="text-[9px] text-zinc-500">
                Head of Product
              </p>

            </div>

            {/* ROHAN */}

            <div
              className="
                border
                border-zinc-600
                rounded-2xl
                h-[110px]
                flex
                flex-col
                items-center
                justify-center
                hover:border-lime-400
                transition
              "
            >

              <div
                className="
                  w-10
                  h-10
                  bg-purple-500
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-base
                  font-bold
                  mb-2
                "
              >
                R
              </div>

              <h3 className="text-sm font-semibold">
                Rohan Verma
              </h3>

              <p className="text-[9px] text-zinc-500">
                Lead Engineer
              </p>

            </div>

            {/* SNEHA */}

            <div
              className="
                border
                border-zinc-600
                rounded-2xl
                h-[110px]
                flex
                flex-col
                items-center
                justify-center
                hover:border-lime-400
                transition
              "
            >

              <div
                className="
                  w-10
                  h-10
                  bg-pink-500
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-base
                  font-bold
                  mb-2
                "
              >
                S
              </div>

              <h3 className="text-sm font-semibold">
                Sneha Kapoor
              </h3>

              <p className="text-[9px] text-zinc-500">
                Design Director
              </p>

            </div>

          </div>

        </section>

        {/* ================= READY TO SHOP ================= */}

        <section
          className="
            border
            border-lime-500/40
            rounded-2xl
            mt-10
            py-8
            text-center
            px-5
          "
        >

          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
            "
          >
            Ready to shop?
          </h2>

          <p
            className="
              text-zinc-500
              text-sm
              mt-3
            "
          >
            Explore thousands of products at unbeatable prices.
          </p>

          <button onClick={()=> nav("/Shop")}
            className="
              mt-5
              bg-lime-400
              text-black
              px-7
              py-3
              rounded-xl
              text-sm
              font-semibold
              inline-flex
              items-center
              gap-2
              hover:bg-lime-300
              transition
            "
          >
            Browse Products

            <ArrowRight size={16} />

          </button>

        </section>

        {/* ================= FOOTER ================= */}

        <footer
          className="
            text-center
            py-10
            text-zinc-600
            text-sm
          "
        >
          © 2025 SkyMart • Built with React
        </footer>

      </main>

    </div>
  );
};

export default About;