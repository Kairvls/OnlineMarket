"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import DashboardPage from '../page';
import CategoryItem from 'components/categories';


const SeafoodPage = () => {
   
    
    const [snacksItems, setSnacksItems] = useState([]);
    
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeContent, setActiveContent] = useState("components/categories");
    
    const renderContent = () => {
      switch (activeContent) {
        case "components/categories":
          return <CategoryItem />
        default:
          return <DashboardPage />
      }
    }

    

    const openModal = (item) => {
      setSelectedItem(item);
      setModalVisible(true);
    }

    



    
    

    useEffect(() => {
        // Fetch seafood items from the backend API
        fetch('/api/snacks') // Adjust this URL if needed
            .then((res) => res.json()) // Parse the response as JSON
            .then((data) => setSnacksItems(data)) // Set seafood items state
            .catch((error) => console.error('Error fetching data', error));

            
    }, []);

    
    
    
    const handleClick = () => {
        alert('tapos na');
    }

    
    return (
        <div>
            <header className="bg-[#19191C] flex w-full items-center">
      
        
      <svg xmlns="http://www.w3.org/2000/svg" width={100} height={60} fill="#28A745" className="bi bi-cart-check-fill flex justify-center text-center ml-[-2px] items-center py-3" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
      </svg>
      
            <div   className="flex text-[20px] justify-center text-center ml-[-20px]"> 
                <a href="https://online-market-xqda.vercel.app/" className="text-[#a6a6a6] font-sans font-medium">Snap</a> 
                <a href="https://online-market-xqda.vercel.app/" className="text-[#28A745] font-sans font-normal">Shop</a>
                
            </div>
            
          
            
            <p className="flex justify-center ml-[32rem] items-center 
                 font-medium text-white text-md">SEAFOOD SECTION</p>
          
            <div className="flex items-center grow px-6 flex-col-2 justify-end mt-1 text-[#a6a6a6]">
              <div className="gap-x-8 flex px-0 font-normal">
              
                
                
              
                  
                </div>
                
                
                <button
                    className="group flex items-center justify-start w-10 h-10 bg-[#1a1a1a] rounded-full  cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                  >
                    <div
                      className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-10"
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
                      <Link href="/view" className="back-btn" onClick={renderContent}>
                      Back
                      </Link>
                    </div>
                  </button>
              
            </div>
            
            
            </header>
            
        <section className="snap-start h-[110vh] bg-white text-gray-600 body-font">
                
                    <div className="container px-10 py-20 mx-auto">
                    <div className="flex flex-wrap -mt-8">
                        {snacksItems.map((item) => (
                        <div key={item.id} id={`item-${item.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        
                            <img
                                alt={item.name}
                                className="object-cover object-center w-full h-full border-4 border-solid border-y-[#28A745] rounded-lg block bg-white transform shadow-lg transition duration-300"
                                src={`/images/snacks_item/${item.name.toLowerCase()}.jpg`}
                            />
                        
                        </a>
                        <div className="mt-4">
                        <label htmlFor="item">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-black title-font text-lg font-medium">{item.name} ({item.label})</h2>
                            
                            <p className="mt-1">₱ {item.price} per-pieces</p>
                            <button onClick={() => openModal(item)} className="bg-blue-600 py-2 mt-2 rounded-md hover:bg-blue-700 text-white text-sm font-medium px-8 flex justify-end items-end">
                                SELECT
                            </button>
                            </label>
                        </div>
                        </div>
                        ))}
                        
                        {modalVisible && ( 
                            <Modal
                                
                                title={"Fresh from the Sea, Delivered to Your Doorstep!"}
                                item={selectedItem}
                                onClose={() => setModalVisible(false)}
                            />
                        )}
                        
        </div>
    </div>

    
</section>
</div>
    
            
        
    )
}

export default SeafoodPage;