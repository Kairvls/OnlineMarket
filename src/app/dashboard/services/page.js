"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
    return (
        <div className='container'>
            <main >
                <section>
                <p style={{position: 'absolute', backgroundImage: ' url(./IMG_20241116_220020.jpg)', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  opacity: '100%', height: '100vh', width: '100vw', }}></p>

                <p style={{position: 'absolute', backgroundColor: 'white', width: '300px', height: '200px', marginLeft: '90px', marginTop: '200px', borderRadius: '10px', border: '1px solid gray', cursor: 'pointer'}}></p>
                <p style={{position: 'absolute', backgroundColor: 'white', width: '300px', height: '200px', marginLeft: '440px', marginTop: '200px', borderRadius: '10px', border: '1px solid gray', cursor: 'pointer'}}></p>
                <p style={{position: 'absolute', backgroundColor: 'white', width: '300px', height: '200px', marginLeft: '790px', marginTop: '200px', borderRadius: '10px', border: '1px solid gray', cursor: 'pointer'}}></p>
                <p style={{position: 'absolute', backgroundColor: 'white', width: '300px', height: '200px', marginLeft: '1140px', marginTop: '200px', borderRadius: '10px', border: '1px solid gray', cursor: 'pointer'}}></p>
                <p style={{position: 'absolute', backgroundColor: 'white', width: '300px', height: '200px', marginLeft: '90px', marginTop: '450px', borderRadius: '10px', border: '1px solid gray', cursor: 'pointer'}}></p>
                <p style={{position: 'absolute', backgroundColor: 'white', width: '300px', height: '200px', marginLeft: '440px', marginTop: '450px', borderRadius: '10px', border: '1px solid gray', cursor: 'pointer'}}></p>
                <p style={{position: 'absolute', backgroundColor: 'white', width: '300px', height: '200px', marginLeft: '790px', marginTop: '450px', borderRadius: '10px', border: '1px solid gray', cursor: 'pointer'}}></p>
                <p style={{position: 'absolute', backgroundColor: 'white', width: '300px', height: '200px', marginLeft: '1140px', marginTop: '450px', borderRadius: '10px', border: '1px solid gray', cursor: 'pointer'}}></p>

                <Image alt='logo' src='/GCash_logo.svg.png' width={500} height={500} className='gcash' style={{position: 'absolute', width: '300px', height: '100px', marginLeft: '90px', marginTop: '200px', backgroundColor: 'blue', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', }} />
                <Image alt='logo' src='/PayMaya_Logo.png' width={500} height={500} className='paymaya' style={{position: 'absolute', width: '300px', height: '100px', marginLeft: '440px', marginTop: '200px', backgroundColor: '#1f7a1f', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', }} />
                <Image alt='logo' src='/BDO_Unibank_(logo).svg.png' width={500} height={500} className='bdo' style={{position: 'absolute', width: '300px', height: '100px', marginLeft: '790px', marginTop: '200px', backgroundColor: '#4d4dff', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', }} />
                <Image alt='logo' src='/Security-Bank-logo-1024x164.png' width={500} height={500} className='securitybank' style={{position: 'absolute', width: '300px', height: '100px', marginLeft: '1140px', marginTop: '200px', backgroundColor: '#1f1f7a', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', }} />
                <Image alt='logo' src='/Metrobank_logo_2017_07_21_11_35_10_0.jpg' width={500} height={500} className='metrobank' style={{position: 'absolute', width: '300px', height: '100px', marginLeft: '90px', marginTop: '450px', backgroundColor: '#330066', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', }} />
                <Image alt='logo' src='/2069482.png' width={500} height={500} className='bpi' style={{position: 'absolute', width: '300px', height: '100px', marginLeft: '440px', marginTop: '450px', backgroundColor: '#800000', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', }} />
                <Image alt='logo' src='/601-6019807_cash-pay-today-cash-pay-logo-hd-png.png' width={500} height={500} className='paycash' style={{position: 'absolute', width: '300px', height: '100px', marginLeft: '790px', marginTop: '450px', backgroundColor: '#f0f5f5', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', }} />
                <Image alt='logo' src='/visa-logo-visa-icon-transparent-free-png.webp' width={500} height={500} className='visa' style={{position: 'absolute', width: '300px', height: '100px', marginLeft: '1140px', marginTop: '450px', backgroundColor: '#e0ebeb', borderRadius: '10px', paddingLeft: '20px', paddingRight: '20px', }} />
                </section>
                <p style={{position: 'absolute', color: 'white', fontSize: '50px', marginLeft: '350px', marginTop: '50px', fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sansSerif', fontWeight: 'bold'}}>ONLINE PAYMENT via Credit Card</p>
            </main>
            <Link href="/" style={{ position: 'absolute', backgroundColor: 'black', color: 'white', paddingLeft: '10px',paddingRight: '10px', paddingTop: '3px', paddingBottom: '3px',  marginLeft: '20px', marginTop: '20px', border: '1px solid white'}}>Back</Link>
        </div>
    );
}
