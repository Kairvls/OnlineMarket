"use client";
import React, { useState, useEffect } from 'react';
import Link from'next/link';

const Rapsodi = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const toggleForm = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    }
    const handleClick = () => {
        alert('tapos na');
    }
    return (
        <div >
            <section className="snap-start h-[120vh] text-gray-600 body-font">
                <h1 className="flex justify-center items-center font-thin text-[30px] text-black mt-4 ">SeaFood Section</h1>
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
                    <Link
                        href="/view"
                        className="absolute flex  top-10 left-10 bg-[#28A745] hover:bg-green-700 text-white py-1 px-4 rounded-md shadow-sm"
                    >
                        Back
                    </Link>
            </section>
        </div>
    )
}
export default Rapsodi;