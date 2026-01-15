import React from 'react'
import style from "./service.module.css"
import Image from 'next/image'

export const metadata = {
    title: "Service Page",
    description: "This is my service page",
    authors: [{ name: "Manoj Avhad" }, { name: "Avahd" }],
    kaywords: ['nextjs', 'reactjs', 'fullstack'],
}

const page = () => {
    return (
        <>
            <h1 className={style.common_heading}>Hello Services</h1>
            <section className=''>
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
                        Our Team
                    </h2>

                    <div className="grid grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Image src="/Dummy_Pr1.jpeg" width={500} height={500} alt='Profile1' className='w-full h-full rounded-full' />
                            </div>
                            <h3 className='text-lg font-semibold text-center text-gray-800'>
                                Manoj Avhad
                            </h3>
                            <p className='text-sm text-gray-600 text-center mt-2'>
                                Full Stack Developer
                            </p>
                            <p className='text-xs text-gray-500 text-center mt-1'>
                                React & NextJs
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Image src="/Dummy_Pr1.jpeg" width={500} height={500} alt='Profile2' className='w-full h-full rounded-full' />
                            </div>
                            <h3 className='text-lg font-semibold text-center text-gray-800'>
                                Aakash Gorase
                            </h3>
                            <p className='text-sm text-gray-600 text-center mt-2'>
                                Frontend Developer
                            </p>
                            <p className='text-xs text-gray-500 text-center mt-1'>
                                React & JS
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Image src="/Dummy_Pr1.jpeg" width={500} height={500} alt='Profile2' className='w-full h-full rounded-full' />
                            </div>
                            <h3 className='text-lg font-semibold text-center text-gray-800'>
                                Bhushya Bhai
                            </h3>
                            <p className='text-sm text-gray-600 text-center mt-2'>
                                Frontend Developer
                            </p>
                            <p className='text-xs text-gray-500 text-center mt-1'>
                                HTML & CSS
                            </p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Image src="/Dummy_Pr1.jpeg" width={500} height={500} alt='Profile2' className='w-full h-full rounded-full' />
                            </div>
                            <h3 className='text-lg font-semibold text-center text-gray-800'>
                                Bhushan Harpade
                            </h3>
                            <p className='text-sm text-gray-600 text-center mt-2'>
                                Dot Net Developer
                            </p>
                            <p className='text-xs text-gray-500 text-center mt-1'>
                                ASP Dot Net & Blezer
                            </p>
                        </div>

                        {/* Team Member 5 */}
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Image src="/Dummy_Pr1.jpeg" width={500} height={500} alt='Profile2' className='w-full h-full rounded-full' />
                            </div>
                            <h3 className='text-lg font-semibold text-center text-gray-800'>
                                Aakya Bhai
                            </h3>
                            <p className='text-sm text-gray-600 text-center mt-2'>
                                Backend Developer
                            </p>
                            <p className='text-xs text-gray-500 text-center mt-1'>
                                React & JS
                            </p>
                        </div>

                        {/* Team Member 6 Full Size Using Fill True Property */}
                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                            <div className="w-full h-full relative bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Image src="/Dummy_Pr1.jpeg" alt='Profile2' className='w-full h-full rounded-full' fill={true} quality={100} priority={false} />
                                {/* quality={100} using this property increase image quality & size */}
                                {/* priority={false} using this property access lazy loading means when user see this image that time loads this image otherwise does not load */}
                            </div>
                            {/* <h3 className='text-lg font-semibold text-center text-gray-800'>
                                Takalu Bhai
                            </h3>
                            <p className='text-sm text-gray-600 text-center mt-2'>
                                Frontend Developer
                            </p>
                            <p className='text-xs text-gray-500 text-center mt-1'>
                                React & JS
                            </p> */}
                        </div>

                    </div>

                    <div>
                        <br />
                        <h1 className='text-lg font-bold'>Notes: </h1>
                        <br />
                        <p>1. quality={100} using this property increase image quality & size</p>
                        <br />
                        <p>2. priority={false} using this property access lazy loading means when user see this image that time loads this image otherwise does not load</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
