import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


// components/Header.js
const Header = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/api/auth')
        .then((res) => res.json())
        .then((data) => setUsername(data.username))
        .catch((error) => console.error('Error fetching username', error));
}, []);

  

    return (
      <form >
        
      <header className="bg-[#19191C] flex w-full items-center">
      
        
          <svg xmlns="http://www.w3.org/2000/svg" width={100} height={60} fill="#28A745" className="animate-blinkssssss bi bi-cart-check-fill flex justify-center text-center ml-[-2px] items-center py-3" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
          </svg>
          
                <div   className="flex text-[20px] justify-center text-center ml-[-20px]"> 
                    <a href="https://online-market-xqda.vercel.app/" className="animate-blinksssss text-[#a6a6a6] font-sans font-medium">Snap</a> 
                    <a href="https://online-market-xqda.vercel.app/" className="animate-blinks text-[#28A745] font-sans font-normal">Shop</a>
                    
                </div>
                
              
                

              
                <div className="flex items-center grow px-6 flex-col-2 gap-x-6 justify-end mt-1 text-[#a6a6a6]">
                  <div className="gap-x-8 flex px-0 font-normal">
                  
                    
                  <div className="animate-blinks relative group hover:text-white">
                    <Link href="/sub_pages/toppicks" ><span>Top Picks</span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                      </Link>
                  </div>
                  

                  
                  <div className="animate-blinksssss relative group hover:text-white">
                    <Link href="/sub_pages/feedback" ><span>Feedback</span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all group-hover:w-full"></span>
                      </Link>
                  </div>
                  

                  
                  <div className="animate-blinkssssss relative group hover:text-white">
                    <Link href="/sub_pages/section" ><span>Section</span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all group-hover:w-full"></span>
                      </Link>
                  </div>
                  

                  
                  <div className="animate-blinksssssss relative group hover:text-white">
                    <Link href="/sub_pages/services" ><span>Services</span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all group-hover:w-full"></span>
                      </Link>
                  </div>
                  
                      
                    </div>
                    
                    
                    <button
                        className="group flex items-center justify-start w-10 h-10 bg-[#28A745 ] rounded-full  cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                      >
                        <div
                          className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 512 512" fill="#28A745 ">
                            <path
                              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                            ></path>
                          </svg>
                        </div>
                        <div
                          className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        >
                          <Link href="/" className="logout" onClick={() => onMenuClick("logout")}>
                          Logout
                          </Link>
                        </div>
                      </button>
                  
                </div>
                
                
                </header>
              
                </form>
                
    );
  };
  
  export default Header;
  