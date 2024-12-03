"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
    

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll grid gap-8 md:items-center md:text-left sm:max-xl:bg-[#1a1a1a] ">
      <section className="snap-start h-[200vh] bg-[#1a1a1a] ">
          <header className="py-0.5 bg-[#1a1a1a] flex w-full mt-2"> 
              <Image src="/onlinemarket3-Photoroom.png" alt="" width={100} height={60} className="flex justify-center text-center ml-2 mt-[-24px]"/>
                <div className="flex gap-1 font-bold text-[20px] justify-center text-center mt-2 ml-[-16px]"> 
                    <a href="https://online-market-xqda.vercel.app/" className="text-white ">Quick</a> 
                    <a href="https://online-market-xqda.vercel.app/" className="text-[#8a00e6] ">Mart</a>
                </div>
                <h1>Welcome to the Dashboard!</h1>;
                
                <div className="flex grow px-10 flex-col-2 gap-x-10 justify-end mt-1 text-[#a6a6a6] ">
                  <div className="mt-2 gap-x-12 flex px-1">
                    <Link href="/available" className="hover:text-white">Available</Link>
                    <Link href="/discounted" className="hover:text-white">Discounted</Link>
                    <Link href="/section" className="hover:text-white">Section</Link>
                    <Link href="/services" className="hover:text-white">Services</Link>
                    </div>
                    <div
                      className="p-3 overflow-hidden w-[40px] h-[40px] hover:w-[270px] bg-white shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:bg-[#b3b3b3] duration-300 duration-300 "
                    >
                      <div className="flex items-center justify-center fill-black ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Isolation_Mode"
                          data-name="Isolation Mode"
                          viewBox="0 0 24 24"
                          width="18"
                          height="17"
                        >
                          <path
                            d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="outline-none text-[14px] bg-transparent w-full text-black font-normal px-4"
                      />
                    </div>

                    <button
                        className="group flex items-center justify-start w-10 h-10 bg-red-600 rounded-full  cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                      >
                        <div
                          className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                            <path
                              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                            ></path>
                          </svg>
                        </div>
                        <div
                          className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        >
                          <Link href="/">
                          Logout
                          </Link>
                        </div>
                      </button>
                </div>
        </header>
      
        <main className="sm:flex sm:grow sm:justify-center sm:items-center md:grid-cols-2 ml-20 mt-[-20px] sm:max-xl:bg-[#1a1a1a]">
          <div className=" mr-[-130px] md:text-center  ">
            <h1 className="mb-1 mt-[-60px] text-[60px] font-bold text-white">Quick Mart</h1>
              <h2 className="mb-1 text-lg font-medium text-[#808080]">Welcome to Quick Mart – Your One-Stop Online Marketplace!</h2>
            
            <div>
            <button
              className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
              >
              </span>
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
              >
                Contact us
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                  ></path>
                </svg>
              </span>
            </button>
          </div> 
          </div>

            <div className="">
              <Image className="" src="/onlinemarket2-Photoroom.png" alt="" width={750} height={300} />
            </div>
          </main>
    </section>

    <section className="snap-start h-screen bg-white">
      <div>
        <main>

        </main>
      </div>

      <div>
        <h1 className="mb-2 text-3xl font-medium">The Online Market</h1>
          <p>The biggest website platform in the 
            world that uses of whole people and 
            interact online with the base of great 
            services website platform.</p>
      </div>
    </section>

    <section className="snap-start h-screen bg-[#cc0052]">
      <div>
        <main></main>
      </div>
      <div>
        <h1 className="text-3xl font-medium">The Online Market</h1>
          <p>The biggest website platform in the 
            world that uses of whole people and 
            interact online with the base of great 
            services website platform.</p>
      </div>
    </section>

    
    </div>
  );
};


