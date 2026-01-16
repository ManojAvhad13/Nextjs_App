import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div>
            <header className='grid grid-cols-2'>
                <div className="">NextAPP</div>
                <nav>
                    <ul className='flex gap-4'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/clientcomp">Clinet</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navigation
