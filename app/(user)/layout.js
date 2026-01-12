import React from 'react'
import "../globals.css";
import Navigation from '@/components/Navigation';

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Navigation />
        <h2>Hi Manoj</h2>
        {children}
      </body>
    </html>
  )
}

export default layout
