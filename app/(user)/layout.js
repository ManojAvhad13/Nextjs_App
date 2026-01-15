import React from 'react'
import "../globals.css";
import Navigation from '@/components/Navigation';
import { Roboto } from "next/font/google"
import { Bebas_Neue } from 'next/font/google';
import { Gravitas_One } from 'next/font/google';

const roboto = Roboto({
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: '400' // Bebas Neue has only one weight
});

const gravitasOne = Gravitas_One({
  subsets: ["latin"],
  weight: '400' // Gravitas One has only one weight
});

// Using "veriable fonts" for the best performance and flexibility and dont need to specify weight . But if you cant use a variable font, 
// you will need to specify a weight.


const layout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navigation />
        <h2>Hi Manoj</h2>
        {children}
      </body>
    </html>
  )
}

export default layout
