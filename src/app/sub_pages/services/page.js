"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function ServicesPage() {
    return (
        <div>
        <section className="text-gray-400 h-[120vh] bg-[#1a1a1a] body-font cursor-pointer">
            <div className="container px-10 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-white transform hover:scale-75 transition duration-300" src="/GCash-Logo.png"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">GCash</h2>
                    <p className="mt-1">Charge $16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block transform hover:scale-75 transition duration-300" src="/Paymaya-Logo.webp"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">Pay Maya</h2>
                    <p className="mt-1">Charge $21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block transform hover:scale-75 transition duration-300" src="/bdo-logo-2.png"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">BDO</h2>
                    <p className="mt-1">Charge $12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block transform hover:scale-75 transition duration-300" src="/security-bank-logo.jpg"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">Security Bank</h2>
                    <p className="mt-1">Charge $18.40</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block transform hover:scale-75 transition duration-300" src="/Metrobank_logo_2017_07_21_11_35_10_0.jpg"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">Metrobank</h2>
                    <p className="mt-1">Charge $16.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block transform hover:scale-75 transition duration-300" src="/BPI.jpg"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">BPI</h2>
                    <p className="mt-1">Charge $21.15</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-white transform hover:scale-75 transition duration-300" src="/cptlogo.png"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">CashPay</h2>
                    <p className="mt-1">Charge $12.00</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-white transform hover:scale-75 transition duration-300" src="/visa-logo-visa-icon-transparent-free-png.webp"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-white title-font text-lg font-medium">VISA</h2>
                    <p className="mt-1">Charge $18.40</p>
                  </div>
                </div>
              </div>
            </div>

            <section className="text-gray-400 bg-[#1a1a1a] body-font">
                <div className="container px-10 py-24 mt-[-100px] mx-auto flex items-center md:flex-row flex-col">
                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                    <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Services user</h2>
                    <h1 className="md:text-3xl text-2xl font-medium title-font text-white">Jhon Carlo Suan</h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                    <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                        <span className="text-xs text-gray-500 mb-1">GET IT ON</span>
                        <span className="title-font font-medium">Google Play</span>
                        </span>
                    </button>
                    <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                        <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                        <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                        </svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                        <span className="text-xs text-gray-500 mb-1">Download on the</span>
                        <span className="title-font font-medium">App Store</span>
                        </span>
                    </button>
                    </div>
                </div>
                </section>
              
            <Link
        href="/view"
        className="absolute flex  top-10 left-10 bg-[#28A745] hover:bg-green-700 text-white py-1 px-4 rounded-md shadow-sm"
      >
        Back
      </Link>
    
          </section>
            
        </div>
    );
}
