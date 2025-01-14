'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SeafoodPage from 'app/view/seafood/page';
import DashboardPage from 'app/view/page';
import { useRouter } from 'next/navigation';


const CategoryItem = ({ items, viewCount, onClose }) => {
    const [views, setViews] = useState(items.view_count);
    const [username, setUsername] = useState(); 
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [categoriesItems, setCategoriesItems] = useState([]);
    const [activeContent, setActiveContent] = useState("app/view/seafood/page");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const toggleForm = () => {
      setIsLogin((prevIsLogin) => !prevIsLogin);
  };

    useEffect(() => {
        fetch('/api/auth')
        .then((res) => res.json())
        .then((data) => setUsername(data.username))
        .catch((error) => console.error('Invalid token', error))
    }, [])

    const renderContent = () => {
      switch(activeContent) {
        case "app/view/seafood/page":
          return <SeafoodPage />
        default:
          return <DashboardPage />
      }
    }
    
    
    const handleClick = async () => {
        // Send a request to the API to increment the view count for the category
        const response = await fetch(`/api/updateViewCount/${items.id}`, {
          method: 'POST',
          
        });
        
        if(response.ok) {
        const data = await response.json();
        setViews(data.updatedViewCount); // Update the view count in the frontend
        
        }
      };
    return (
      
      
        <div>
        {loading && 
        <div
        className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]"
      >
        <span
          className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"
        >
        </span>
      </div>
}
                      <section className="text-gray-600 bg-white body-font">
        
                      <button
                        type="button" onClick={() =>onClose(false)} className="bg-white text-center w-40 ml-[84rem] mt-[20px] rounded-2xl h-12 relative text-black text-xl font-semibold border-4 border-indigo-50 group">
                        <div className="bg-[#28A745] rounded-xl h-10 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500">
                          <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#fff" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                            <path fill="#fff" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path>
                          </svg>
                        </div>
                        <p className="translate-x-4">Go Back</p>
                      </button>
        
                          <div className="container px-20 py-20 mx-auto">
                            <div className="flex flex-wrap w-full mb-20">
                              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">ONLINE MARKET IN SNAPSHOP</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                              </div>
                              <div className="border-l-2 border-solid border-black h-[100px]"></div>
                              <p className="lg:w-1/2 w-full ml-4 flex-1 leading-relaxed text-gray-500">We connect you with a diverse selection of quality products, from trendy fashion and must-have electronics to unique handmade crafts and everyday essentials.</p>
                            </div>
        
                            <div className="container py-18 mx-auto">
                              <div className="flex flex-wrap -m-4">
                                
                                {/* first image */}
                                {items.map((item) => (
                                <div key={item.id} id={`item-${item.id}`} className="animate-blinksssssss p-4 md:w-1/4">
                                  <div     className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`/images/all_categories/${item.name.toLowerCase()}.jpg`} alt={item.name}/>
                                    <div className="p-6">
                                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.name}</h1>
                                      <p className="leading-relaxed mb-3">{item.description}</p>
                                      <div className="flex items-center flex-wrap ">
                                        <Link href={`/view/${item.name.toLowerCase()}`}  onClick={() => setLoading(false)} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Select
                                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                          </svg>
                                        </Link>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                          </svg>
                                          {item.view_count}
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                          </svg>11
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>
                            ))}
                                
        
                                <div className="flex flex-wrap -m-12 flex-1">
              <div className="py-20 ml-20 md:w-[650px] flex flex-col items-start">
                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Visit the page of SnapShop.com Company for more details</h2>
                <p className="leading-relaxed mb-8">Highlight the convenience of shopping anytime, anywhere with a wide variety of fresh, high-quality products delivered straight to customers doors. Emphasize unique features like fast delivery, secure payments, and special discounts.</p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                  <a className="text-indigo-500 inline-flex items-center">Go to this page
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>500K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>356
                  </span>
                </div>
                <a className="inline-flex items-center">
                  <img alt="blog" src="/myimage.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{username || 'Users'}</span>
                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">THE DEVELOPER</span>
                  </span>
                </a>
              </div>
                                
                                  </div>
          
                               
                              </div>
                            </div>
                          </div>
                        </section>
                      
                          
      
                    </div>

                    
    );
}
export default CategoryItem;