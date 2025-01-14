"use client";
import React, { useState, useEffect } from "react";
import PaymentMethod from "components/payment";

const Modal = ({  onClose, title, item }) => {


 
  
  const [pieces, setPieces] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setModalVisible(true)
    setSelectedItem(item)
  }
  

  const computePrice = () => {
    return item.price * pieces;
  }

  const handleClick = () => {
    alert('Added to Cart');
  }
  
  

  return (
    <section
      className="text-gray-600 body-font bg-black px-60 bg-opacity-50 fixed inset-0 flex justify-center items-center"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="container bg-white rounded-lg shadow-lg p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 focus:outline-none text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="flex flex-wrap">
          <img
            alt={item?.name || "Item"}
            className="animate-blinks lg:w-1/2 w-full border-x-2 border-solid border-black lg:h-auto h-64 object-cover object-center rounded"
            src={`/images/beverages_item/${item.name.toLowerCase()}.jpg`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="animate-blinkss text-sm title-font text-gray-500 tracking-widest">
              {title}
            </h2>
            <h1
              id="modal-title"
              className="animate-blinkss text-gray-900 text-3xl title-font font-medium mb-1"
            >
              {item.name}
            </h1>
            <div className="flex mb-4">
              {/* Rating Stars */}
              <span className="animate-blinkss flex items-center">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <span className="animate-blinkss text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p id="modal-description" className="animate-blinkss leading-relaxed">
              {item.description}
            </p>
            {/* Additional Content */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Flavor</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>

              <div className="block ml-28 items-center">
              
              
                
                <div className="animate-blinkss flex mt-2">
                <label  className="-mr-6">Per pieces:</label>
                <div  className="relative">
                  <select value={pieces} onChange={(e) => setPieces(parseFloat(e.target.value))} className="rounded border appearance-none border-black py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm pl-3 ml-7 pr-10">
                    <option value={1}>1 piece</option>
                    <option value={2}>2 pieces</option>
                    <option value={3}>3 pieces</option>
                    <option value={4}>4 pieces</option>
                    <option value={5}>5 pieces</option>
                  </select>
                </div>
              </div>
              </div>
            </div>
            <div className="flex">
              <div className="absolute mt-2">
              <span className="animate-blinkss title-font font-medium text-lg text-gray-900">
              Total Price: ₱{computePrice()} 
              </span>
              </div>
              
              <button onClick={() => openModal(item)} className="animate-blinkss flex ml-[19rem] text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">
                Buy
              </button>
              
              <button onClick={handleClick} className="animate-blinkss flex ml-auto group text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              <p className="text bg-[#19191C] py-2 bg-opacity-50 rounded-lg text-white text-[0.7em] w-[100px] absolute bottom-[2.5rem] ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.3s] flex items-center justify-center">
                Add to Cart
              </p>
              </button>
              
            </div>
            
          </div>
          {modalVisible && (
            <PaymentMethod
                item={selectedItem}
                onClose={() => setModalVisible(false)}
            />
            
          )}
        </div>
      </div>
    </section>
  );
};

export default Modal;
