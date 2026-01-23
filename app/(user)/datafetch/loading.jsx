const loading = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='text-center'>
                <div className='mb-4 flex justify-center'>
                    <div className='h-12 w-12 animate-spin rounded-full border-4 border-blue-300 border-t-blue-600'></div>
                </div>
                <h1 className='text-2xl font-semibold text-gray-700'>Loading...</h1>
            </div>
        </div>
    )
}

export default loading