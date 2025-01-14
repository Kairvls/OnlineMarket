'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ServicesPage from '../sub_pages/services/page';
import ToppicksPage from '../sub_pages/toppicks/page';
import FeedbackPage from '../sub_pages/feedback/page';
import SectionPage from '../sub_pages/section/page';
import Home from '../page';
import Header from 'components/header';
import AutoBackToTopButton from 'components/backtotop';
import CategoryItem from 'components/categories';




const DashboardPage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState('');
  const [activeContent, setActiveContent] = useState("/view");
  const router = useRouter();
  const [isAtBottom, setIsAtBottom] = useState(false);

  

  useEffect(() => {
    
    
    
    if (activeContent === "logout") {
      router.push("/");
    }
  }, [activeContent, router]);

  const renderContent = () => {
    switch (activeContent) {
      case "toppicks":
        return <ToppicksPage />;
      case "feedback":
        return <FeedbackPage />;
      case "section":
        return <SectionPage />;
      case "services":
        return <ServicesPage />;
      case "categories":
        return <CategoryItem />;
      default:
        return <Home />;
    }
  };
    
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
  };
  
  const items = [
    { id: 1, name: 'Seafood',  description: 'Fresh and frozen fish, shellfish, and other ocean delights.', view_count: 0},
    { id: 2, name: 'Meat-Poultry',  description: 'High-quality beef, pork, chicken, and other meats.', view_count: 0},
    { id: 3, name: 'Fruits',  description: 'Seasonal, fresh, and nutritious fruits for every need.', view_count: 0},
    { id: 4, name: 'Vegetables',  description: 'Crisp, healthy, and fresh vegetables for your meals.', view_count: 0},
    { id: 5, name: 'Beverages',  description: 'Refreshing drinks, from juices to sodas and teas. ', view_count: 0},
    { id: 6, name: 'Snacks',  description: 'Staples like rice, pasta, and cereals for everyday meals.', view_count: 0},
    { id: 7, name: 'Noodles',  description: 'Instant and fresh noodles for quick, delicious meals. ', view_count: 0},
    { id: 8, name: 'Canned-Goods',  description: 'Ready-to-eat and preserved food items for convenience.', view_count: 0},
    { id: 9, name: 'Personal-Care-Hygiene',  description: 'Essentials for cleanliness and self-care.', view_count: 0},
    { id: 10, name: 'Condiments-Spices',  description: 'Flavor enhancers for your cooking.', view_count: 0}
  ];


    

  return (
    
    <div className="overflow-y-scroll h-screen grid  md:items-center md:text-left sm:max-xl:bg-transparent dashboard">
      <section className="snap-start">
          <Header 
            onMenuClick={setActiveContent}
            onClick={renderContent}
          />  
        
        <main className="sm:flex sm:grow sm:justify-start h-[95vh] bg-[url('/grocery.png')] bg-cover bg-center sm:items-center md:grid-cols-1  sm:max-xl:bg-[#1a1a1a]">
        <p className="flex mt-8 top-0 left-0 bg-white md:ml-48 rounded-lg opacity-80 w-[70rem] h-[30rem] justify-center items-center "></p>
          <div className="md:text-center ml-[-65rem]">
            
            <h1 className="mt-[-10px] animate-blinks duration-700 text-[70px] font-bold text-black">SnapShop</h1>
              <h2 className="mb-10 text-lg animate-blinksssss font-medium  px-2 rounded-md opacity-80 text-[#28A745]">Welcome to SnapShop – Your One-Stop Online Marketplace!</h2>
            
            <div>
            
            <Link href="/sub_pages/contact">
            <button
              className="relative animate-blinkssssss duration-200 inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#28A745_0%,#00ff55_50%,#006622_100%)]"
              >
              </span>
              
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
              >
                
                Contact us
                <svg
                  stroke="#28A745"
                  fill="#28A745"
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
            </Link> 
            

            
          </div> 
          </div>
          <img src="/shopping-logo.svg" width={400} height={500} className="mt-6 flex animate-bounce"></img>
          <AutoBackToTopButton
            
          />
            
            
              
            
            
          
          </main>
        
          
          
          
          
    </section>
    <div className="block snap-start h-[75] bg-[#19191C]">
            <h1 className="text-gray-200 py-4 text-center text-4xl font-sans font-semibold mb-2 mr-[74.3rem]">Categories</h1>
            
            <div className="flex flex-wrap justify-center gap-10">
              {/* Category Item */}
              <div className="duration-75 relative hover:border border-solid border-white rounded-lg">
                <Image
                  alt="content" className="cursor-pointer rounded-lg hover:border-red-100" width={280} height={300} src="/beverages.webp"
                />
                <div className="absolute mt-[-7.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#262626] w-full h-4/6 rounded-b-lg text-white font-thin text-[20px] justify-start items-left p-4 block">
                <p >Beverages</p>
                <p className="text-[11px] mt-8 text-left text-[#808080]">Beverages are essential for daily life, offering hydration and a variety of flavors to suit different preferences. They cater to diverse needs, whether refreshing with cold drinks, energizing with caffeine, or relaxing with herbal teas. Including beverages in your market appeals to all demographics, ensuring they find something for their lifestyle and taste.</p>
                </div>
              </div>

              
              <div className="border-l-2 border-solid border-white h-[380px]"></div>


              {/* Duplicate Category Items */}
              <div className="duration-2000 relative hover:border border-solid border-white rounded-lg">
                <Image
                  alt="content" className="cursor-pointer rounded-lg hover:border-red-100 object-contain" width={280} height={300} src="/vegefruits.jpg"/>
                <div className="absolute mt-[-7.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#262626] w-full h-4/6 rounded-b-lg text-white font-thin text-[20px] justify-start items-left p-4 block">
                <p >Fruits & Vegetables</p>
                <p className="text-[11px] mt-8 text-left text-[#808080]">Fruits and vegetables are staples for a healthy diet, providing essential vitamins, minerals, fiber, and antioxidants. They appeal to health-conscious customers and cater to a wide range of needs, from meal preparation to snacking. Including them in your market promotes wellness and offers variety, making your platform indispensable for households and individuals aiming for balanced nutrition.</p>
                </div>
              </div>

              <div className="border-l-2 border-solid border-white h-[380px]"></div>

              <div className="duration-3000 relative hover:border border-solid border-white rounded-lg">
                <Image
                  alt="content" className="cursor-pointer rounded-lg hover:border-red-100" width={280} height={300} src="/meatcategoryssssss.jpg"/>
                <div className="absolute mt-[-7.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#262626] w-full h-4/6 rounded-b-lg text-white font-thin text-[20px] justify-start items-left p-4 block">
                <p >Meat</p>
                <p className="text-[11px] mt-8 text-left text-[#808080]">Meat is a versatile ingredient in countless cuisines and is a primary source of protein for many diets. It caters to customers looking for high-quality cuts for daily meals, special recipes, or traditional dishes. Offering meat in your market ensures you meet diverse dietary preferences and provide essentials for hearty, satisfying meals, making your platform a one-stop shop for fresh, protein-rich options.</p>
                </div>
              </div>

              <div className="border-l-2 border-solid border-white h-[380px]"></div>

              <div className="duration-4000 relative hover:border border-solid border-white rounded-lg">
                <Image
                  alt="content" className="cursor-pointer rounded-lg hover:border-red-100" width={280} height={300} src="/noodles_cannedgoods.jpg"/>
                <div className="absolute mt-[-7.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#262626] w-full h-4/6 rounded-b-lg text-white font-thin text-[20px] justify-start items-left p-4 block">
                <p >Canned Goods</p>
                <p className="text-[11px] mt-8 text-left text-[#808080]">Canned goods are perfect for busy individuals or families who value convenience and quick meal preparation. They offer a reliable pantry staple, ensuring access to essential or specialty items without worrying about spoilage. Including canned goods in your market appeals to customers seeking affordable, easy-to-store, and versatile options for cooking or snacking. </p>
                </div>
              </div>
              
            </div>
            <button className="bg-[#28A745] hover:bg-green-700 text-white ml-[5rem] mt-4 mb-10 font-thin text-[18px] px-6 py-3 rounded-lg" onMouseEnter={() => setIsPopupVisible(false)} onClickCapture={() => setIsPopupVisible(false)} onClick={() => setIsPopupVisible(!isPopupVisible)}>All Categories</button>
            

            
            {isPopupVisible && (
              
              <CategoryItem
                
                items={items}
                onClose={setIsPopupVisible}
              />
            )}
            
          </div>
          <section className="text-gray-400 bg-[#19191C] body-font">
            <div className="container px-20 py-24 lg:mt-[-10px] mx-auto flex flex-wrap">
              <div className="flex flex-col text-center w-full mb-10">
                <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">THE ORMOC CITY ONLINE MARKET PLATFORM</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">SnapShop Capital</h1>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-white text-lg title-font font-medium">Networth</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">we’re a growing hub of convenience, quality, and trust, adding value to every transaction. Ormoc City (The City of beautiful people).</p>
                      <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 className="text-white text-lg title-font font-medium">Online</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">Experience the convenience of online shopping with SnapShop, designed to bring the best of Ormoc City right to your fingertips.</p>
                      <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 className="text-white text-lg title-font font-medium">Discount</h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">Our platform is designed to keep you updated in real-time, whether it’s the availability of fruits and vegetables or exclusive discounts.</p>
                      <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    <section className="snap-start h-[170vh] w-full text-gray-400 bg-white body-font">
      <div className="container px-20 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Certified Branches</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className="border-l-2 border-solid ml-[-5px] border-black h-[100px]"></div>
            <p className="lg:w-1/2 w-full flex-1 ml-2 leading-relaxed text-gray-500">Your trusted branches to assure customers of quality and authenticity. Emphasize that every certified branch meets strict standards for product freshness, excellent service, and reliability. This builds trust and encourages customers to shop with confidence, knowing they are getting the best from your online market.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-[#1a1a1a] shadow-lg rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/branches/Watsons.png" alt="content"/>
                <h3 className="tracking-widest text-indigo-500 px-5 text-xs font-medium title-font">BRANCH</h3>
                <h2 className="text-lg text-white px-5 font-medium title-font mb-4">Watsons</h2>
                <hr/>
                <p className="leading-relaxed px-5 py-3 text-base">Offering trusted health, wellness, and personal care products, now available in our online market for your convenience.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-[#1a1a1a] shadow-lg rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/branches/RobinsonsOfOrmoc.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-500 px-5 text-xs font-medium title-font">BRANCH</h3>
                <h2 className="text-lg text-white px-5 font-medium title-font mb-4">Robinsons Place of Ormoc</h2>
                <hr/>
                <p className="leading-relaxed px-5 py-3 text-base">Bringing you a wide selection of fresh groceries, snacks, and everyday essentials from Robinsons Ormoc Supermarket.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-[#1a1a1a] shadow-lg rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/branches/Magnolia.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-500 px-5 text-xs font-medium title-font">BRANCH</h3>
                <h2 className="text-lg text-white px-5 font-medium title-font mb-4">Magnolia</h2>
                <hr/>
                <p className="leading-relaxed px-5 py-3 text-base">Enjoy high-quality dairy products, ice creams, and frozen treats from Magnolia, with a convenient shopping experience.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-[#1a1a1a] shadow-lg rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/branches/CocaCola.jpg" alt="content"/>
                <h3 className="tracking-widest text-indigo-500 px-5 text-xs font-medium title-font">BRANCH</h3>
                <h2 className="text-lg text-white px-5 font-medium title-font mb-4">Coca-Cola</h2>
                <hr/>
                <p className="leading-relaxed px-5 py-3 text-base">Quench your thirst with refreshing beverages from Coca-Cola, now available in our online market for easy access and delivery.</p>
              </div>
            </div>
          </div>
        </div>

       

  <section className="text-gray-400 mt-[-60px] bg-white body-font">
  <hr className="text-black mt-10 border-t-1 border-solid border-black"/>
  <div className="container px-20 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">All Over Popularity</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600">Trusted by thousands for its reliable service and diverse product selection, our marketplace offers everything from fashion and gadgets to daily essentials, all at your fingertips. Whether you&apos;re browsing for deals, exploring unique finds, or selling your products to a wide audience, we’re here to make every transaction smooth and secure.</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 shadow-lg px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-black">2.7K</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
        
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 shadow-lg px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-black">1.3K</h2>
          <p className="leading-relaxed">Users</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 shadow-lg px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-black">74</h2>
          <p className="leading-relaxed">Files</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 shadow-lg px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-black">46</h2>
          <p className="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>
</section>

    <section className="snap-start h-[40vh] bg-[#cc0052]">
      <div>
        <main>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
        <br className="hidden lg:inline-block"/>fruits & vegetables
      </h1>
      <p className="mb-8 leading-relaxed">At SnapShop, we prioritize delivering the freshest fruits and vegetables before they&apos;re sold out! Designed for the busy people of Ormoc City, our online market ensures you never miss out on high-quality, locally sourced produce.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Show</button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Unshow</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-lg border-2 border-solid border-gray-800" alt="hero" src="/fruitsmarket.jpg"/>
    </div>
  </div>
</section>

<section className="text-gray-400 body-font bg-[#19191C]">
  <div className="container flex flex-wrap px-20 py-0 mx-auto items-center">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">SnapShop the OnlineMarket</h1>
      <p className="leading-relaxed text-base">Serving the vibrant community of Ormoc City, SnapShop is your trusted local marketplace designed to bring convenience right to your doorstep. Shop for groceries, essentials, and more from the comfort of your home, saving time and effort. Whether you’re a busy professional or simply want hassle-free shopping, we’re here to make life easier.</p>
      <a className="text-indigo-400 inline-flex items-center mt-4">Learn More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">CATEGORIES</h2>
      <nav className="flex flex-wrap list-none -mb-1">
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">https://online-market</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">https://SnapShop.com</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">https://JCSUAN</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">https://OrmocMarket</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">https://SnapShopPage</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">https://random.com</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">https://OnlineMarketPH</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:text-white">https://CityMart</a>
        </li>
      </nav>
    </div>
    
    
  </div>
  <div className="bg-gray-800 w-full bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 SnapShop —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@jhoncarlosuan26</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-400">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-400">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
    </div>
</section>
        </main>
      </div>
      <div>
        
      </div>
    </section>

    
    </div>
    
    
  );
};

export default DashboardPage;
