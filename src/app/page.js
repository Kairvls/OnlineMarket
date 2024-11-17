"use client";
import React from 'react';
import '../app/styles.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  

  return (
    
    <div>
      <header>
        <nav className='navigation'>
        <p style={{position: 'absolute', paddingRight: '1546px', paddingTop: '25px', paddingBottom: '25px', backgroundColor: 'black', marginLeft: '-100px', marginTop: '-5px'}}></p>
        <p style={{ position: 'absolute', fontWeight: 'bold', color: 'white', marginTop: '-93px', fontSize: '40px', fontFamily: 'Montserrat, sans-serif', marginLeft: '590px'}}>QuickMart</p>
        <p style={{position: 'absolute', marginLeft: '1280px', marginTop: '-80px', width: '20px', height: '20px', color: 'white'}}>10</p>
        <p style={{position: 'absolute', marginLeft: '1380px', marginTop: '-80px', width: '20px', height: '20px', color: 'white'}}>3</p>
        <p style={{position: 'absolute', marginLeft: '360px', marginTop: '-40px', fontSize: '18px', color: 'white'}}>A virtual shopping plaza where buyers and sellers meet, like a digital mall without walls.</p>
        <a href='https://smmarkets.ph/' style={{position: 'absolute', marginLeft: '1120px', marginTop: '-80px', border: '1px solid white',color: 'white', paddingRight: '10px', paddingLeft: '10px', cursor: 'pointer'}}>Views</a>
        <input type='search' placeholder='Food Section' style={{position: 'absolute', paddingRight: '30px', marginLeft: '-50px', backgroundColor: 'transparent', marginTop: '-80px', paddingBottom: '3px', paddingTop: '3px', textIndent: '10px', border: '1px solid black', color: 'black', borderRadius: '16px'}}></input>
        <svg xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-cart4" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
        <input type='radio' style={{position: 'absolute', marginLeft: '660px', marginTop: '60px' }}></input>
        <input type='radio' style={{position: 'absolute', marginLeft: '675px', marginTop: '60px' }}></input>
        <input type='radio' style={{position: 'absolute', marginLeft: '690px', marginTop: '60px' }}></input>
        <input type='radio' style={{position: 'absolute', marginLeft: '705px', marginTop: '60px' }}></input>
        
        <Link href="/available" className='available' style={{color: 'white', position: 'absolute', marginLeft: '28rem', marginTop: '6px', fontSize: '15px'}}>Available</Link>
        <Link href='/services' className='services' style={{color: 'white', position: 'absolute', marginLeft: '34.3rem', marginTop: '6px', fontSize: '15px'}}>Services</Link>
        <Link href='/discounted' className='discounted' style={{color: 'white', position: 'absolute', marginLeft: '40.5rem', marginTop: '6px', fontSize: '15px'}}>Discounted</Link>
        <Link href='/section' className='section' style={{color: 'white', position: 'absolute', marginLeft: '48rem', marginTop: '6px', fontSize: '15px'}}>Section</Link>
        <Link href='/signup' className='signup' style={{color: 'white', position: 'absolute', marginLeft: '54rem', marginTop: '6px', border: '1px solid white', paddingLeft: '10px', paddingRight: '10px', fontSize: '15px'}}>Sign Up</Link>
        
        </nav>
      </header>
      
      <main>
        <section>
          <div className='mainpage'>
            <p style={{position: 'absolute', paddingTop: '220px', paddingBottom: '220px', paddingLeft: '500px', paddingRight: '500px', marginTop: '90px', marginLeft: '255px', backgroundColor: 'white', opacity: '90%', borderRadius: '10px'}}></p>
            <Image src='/vegetables.png' width={500} height={300} alt='logo' style={{position: 'absolute', marginLeft: '280px', marginTop: '50px'}} />

            <div className="description1">
            <p style={{position: 'absolute', marginLeft: '820px', fontSize: '45px', marginTop: '120px', fontWeight: 'bold', fontFamily: 'Arial, Helvetica, sans-serif'}}>Online Market</p>
            </div>

            <div className="description2">
            <p style={{position: 'absolute', textAlign: 'right', fontSize: '18px', fontFamily:'Arial, Helvetica, sans-serif',  marginTop: '185px', marginLeft: '670px', fontWeight: 'bold'}}>Welcome to Online Market – Your One-Stop Online Marketplace!</p>
            </div>

            <div className="description3">
            <p style={{position: 'absolute', textAlign: 'right', fontSize: '14px', fontFamily:'Arial, Helvetica, sans-serif', marginTop: '210px', marginLeft: '785px' }}>Discover a world of convenience with Online Market, where shopping <br/>is made simple and enjoyable. We connect you with a diverse <br/>selection of quality products, from trendy fashion and <br/>must-have electronics to unique handmade crafts <br/>and everyday essentials. With a commitment to <br/>reliability, secure transactions, and seamless <br/>browsing, we bring the store to your screen <br/>so you can shop anywhere, anytime.</p>
            </div>
            
            <div className="icon">
            <Image alt='logo' src="/instagram.png" width={500} height={500} style={{position: 'absolute', marginTop: '480px', marginLeft: '690px', width: '30px', height: '30px', cursor: 'pointer'}}/>
            <Image alt='logo' src="/facebook.png" width={500} height={500} style={{position: 'absolute', marginTop: '480px', marginLeft: '740px', width: '30px', height: '30px', cursor: 'pointer'}}/>
            <Image alt='logo' src="/tiktok.webp" width={500} height={500} style={{position: 'absolute',  marginTop: '480px', marginLeft: '790px', width: '30px', height: '30px', cursor: 'pointer'}}/> 
            </div>
          </div>
            
        </section>
      </main>
      
      <Image alt='background' src= "/fruitsmarket.jpg" width={500} height={500} style= {{width: '2000px', height: '595px'}} />
    </div>
  );
}



