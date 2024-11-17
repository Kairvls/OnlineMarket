"use client";
import React from 'react';
import '../styles.css';
import Link from 'next/link';

export default function DiscountedtPage() {
    return (
        <div>
            <Link href="/" style={{ position: 'absolute', backgroundColor: 'black', color: 'white', padding: '10px', marginLeft: '20px', marginTop: '50px'}}>Back</Link>
        </div>
    );
}