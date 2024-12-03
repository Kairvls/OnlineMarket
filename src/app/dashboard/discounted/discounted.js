"use client";
import React from 'react';
import '../styles/discounted.css';
import Link from 'next/link';
import Image from 'next/image';

const DiscountedtPage = () => {
    return (
        <div className='container'>
            <header >
                <p className='online'>Online Market</p>
                
            </header>

            <main>
                <Image src='/slicebread.webp' alt='image' width={500} height={200} className='slicebread'  />
            </main>
            <header className="w-full flex p-4 bg-transparent gap-12 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-shop" viewBox="0 0 16 16">
          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
          </svg>
          <p className="ml-12 text-[#0047b3] absolute font-bold mt-1 text-base">Online</p>
          <p className="ml-4 text-[#ff5500] font-bold mt-1 text-base ">Market</p>
          <div className="ml-48 "></div>
          <Link href="/available" className="hover:text-white text-[#cccccc]">Available</Link>
          <Link href="/discounted" className="hover:text-white text-[#cccccc]">Discounted</Link>
          <Link href="/section" className="hover:text-white text-[#cccccc]">Section</Link>
          <Link href="/services" className="hover:text-white text-[#cccccc]">Services</Link>
          
        </header>

        <main className='h-screen'>
          <button onClick={handleClick} className="text-white bg-[#1a1a1a] p-2 border border-white shadow ml-16 mt-40">Click me</button>
        </main>

















            <Link href="/" style={{ position: 'absolute', backgroundColor: 'black', color: 'white', padding: '10px', marginLeft: '20px', marginTop: '50px'}}>Back</Link>    
        </div>



    );
  }
export default DiscountedtPage;