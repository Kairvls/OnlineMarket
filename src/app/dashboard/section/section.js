"use client";
import React from 'react';
import '../styles/all.css';
import Link from 'next/link';

const SectionPage = () => {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded">Box 1</div>
          <div className="p-4 bg-blue-200 rounded">Box 2</div>
          <div className="p-4 bg-blue-300 rounded">Box 3</div>
        </div>
        <Link href="/" style={{ position: 'absolute', backgroundColor: 'black', color: 'white', padding: '10px', marginLeft: '20px', marginTop: '50px'}}>Back</Link>
      </div>
    );
  };
  
  export default SectionPage;
  