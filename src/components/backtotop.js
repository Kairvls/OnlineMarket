import React, { useState, useEffect } from 'react';

const AutoBackToTopButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkScrollPosition = () => {
    const bottomOfPage = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
    setIsAtBottom(bottomOfPage);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      {isAtBottom && (
        <button onClick={scrollToTop} className="Btn right-10 bottom-10 group w-[45px] h-[45px] bg-gradient-to-r from-[#44ea76] to-[#39fad7] flex items-center justify-center rounded-full cursor-pointer relative border-none">
        <svg height="1.2em" className="arrow text-white" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
        </svg>
        <p className="text text-white text-[0.7em] w-[100px] absolute bottom-[-18px] opacity-0 group-hover:opacity-100 transition-opacity duration-[0.7s] flex items-center justify-center">
          Back to Top
        </p>
      </button>
      )}
    </>
  );
};

export default AutoBackToTopButton;
