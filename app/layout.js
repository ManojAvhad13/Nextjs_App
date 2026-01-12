import React from 'react'
import Navigation from '../components/Navigation'
import "./globals.css";

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
