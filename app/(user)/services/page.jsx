import React from 'react'
import style from "./service.module.css"
import Image from 'next/image'

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
                                Frontend Developer
                            </p>
                            <p className='text-xs text-gray-500 text-center mt-1'>
                                React & NextJs
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
