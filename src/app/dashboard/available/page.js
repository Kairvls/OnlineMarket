"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AvailablePage() {


    return (
        <div >
            <table className='table'>
                <thead>
                    <tr style={{ backgroundColor: 'black', color: 'white', gap: '30px', fontWeight: 'bold', textIndent: '5px'}}>
                        <th>Canned Section</th>
                        <th>Seafood Section</th>
                        <th>Noodles Section</th>
                        <th>Meat Section</th>
                        <th>Chicken Section</th>
                        <th>Water Section</th>
                        <th>Vegetables Section</th>
                        <th>Fruits Section</th>
                        <th>Snacks Section</th>
                        <th>MedKit Section</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Spam</td>
                        <td>Bangus</td>
                        <td>Pancit Cantoon</td>
                        <td>Giniling</td>
                        <td>Pecho Part</td>
                        <td>Natures Spring</td>
                        <td>Kalabasa</td>
                        <td>Apple</td>
                        <td>Nova</td>
                        <td>Cotton</td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Corned Beef</td>
                        <td>Tilapia</td>
                        <td>Ramen</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Youngstown Sardines</td>
                        <td>Shrimp</td>
                        <td>Batchoy</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Meat Loaf</td>
                        <td>Salmon</td>
                        <td>Bulalo</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Beef Loaf</td>
                        <td>Cod</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Canned Tuna</td>
                        <td>Tuna</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Sisig Tuna</td>
                        <td>Snapper</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>CDO</td>
                        <td>Barramundi</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Carne Norte</td>
                        <td>Bangus</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>Wow Ulam</td>
                        <td>Tamban</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
            </table>
            
            <Link href="/" style={{ position: 'absolute', backgroundColor: 'black', color: 'white', paddingLeft: '10px', paddingRight: '10px', paddingTop: '3px', paddingBottom: '3px', marginLeft: '20px', marginTop: '20px', border: '1px solid white', borderRadius: '4px'}}>Back</Link>
            <Image src="/IMG_20241116_220020.jpg" alt="background" width={2000} height={785} />
            <p style={{ position: 'absolute', backgroundColor: '#ccc', paddingRight: '350px', paddingTop: '50px', paddingBottom: '200px', marginLeft: '100px', marginTop: '-350px', borderRadius: '10px'}}></p>
            <p style={{ position: 'absolute', backgroundColor: 'orangered', paddingRight: '350px', paddingTop: '50px', paddingBottom: '180px', marginLeft: '100px', marginTop: '-340px', borderRadius: '10px'}}></p>
            <Image src='/meat.png' alt='logo' width={220} height={200} style={{position: 'absolute', marginTop: '-120px', marginLeft: '50px'}} />

            <p style={{ position: 'absolute', backgroundColor: '#ccc', paddingRight: '350px', paddingTop: '50px', paddingBottom: '200px', marginLeft: '590px', marginTop: '-350px', borderRadius: '10px'}}></p>
            <p style={{ position: 'absolute', backgroundColor: 'orangered', paddingRight: '350px', paddingTop: '50px', paddingBottom: '180px', marginLeft: '590px', marginTop: '-340px', borderRadius: '10px'}}></p>

            <p style={{ position: 'absolute', backgroundColor: '#ccc', paddingRight: '350px', paddingTop: '50px', paddingBottom: '200px', marginLeft: '1080px', marginTop: '-350px', borderRadius: '10px'}}></p>
            <p style={{ position: 'absolute', backgroundColor: 'orangered', paddingRight: '350px', paddingTop: '50px', paddingBottom: '180px', marginLeft: '1080px', marginTop: '-340px', borderRadius: '10px'}}></p>
        </div>
    );
}



