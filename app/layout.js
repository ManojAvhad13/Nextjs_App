import React from 'react'

const layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <h2>About</h2>
                {children}
            </body>
        </html>
    )
}

export default layout
