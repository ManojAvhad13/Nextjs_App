import { User } from 'lucide-react';

const DataFetchServer = async (props) => {
    const searchParams = await props.searchParams;
    const userName = searchParams.name;

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    // Handle case where no name is provided
    if (!userName) {
        return (
            <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            No Name Provided
                        </h1>
                        <p className="text-gray-600">
                            Please add ?name=yourname to the URL
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const res = await fetch(`https://api.genderize.io/?name=${userName}`);
    const userData = await res.json();
    console.log(userData);
    const confidencePercentage = (userData.probability * 100).toFixed(2);
    const isMale = userData.gender === 'male';

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative overflow-hidden">
                {/* Background decorations */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${isMale ? "bg-blue-100" : "bg-pink-100"} rounded-full -translate-y-16 translate-x-16 opacity-50`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 ${isMale ? "bg-blue-50" : "bg-pink-50"} rounded-full translate-y-12 -translate-x-12 opacity-50`}></div>

                <div className="relative z-10">
                    {/* Avatar Section */}
                    <div className="text-center mb-6">
                        <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${isMale ? "bg-linear-to-br from-blue-400 to-blue-600" : "bg-linear-to-br from-pink-400 to-pink-600"} shadow-lg`}>
                            <User className="w-12 h-12 text-white" strokeWidth={1.5} />
                        </div>

                        <h1 className="text-3xl font-bold text-gray-800 mb-2 capitalize">
                            {userData.name}
                        </h1>

                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${isMale ? "bg-blue-100 text-blue-800 border border-blue-200" : "bg-pink-100 text-pink-800 border border-pink-200"}`}>
                            <span className={`w-2 h-2 rounded-full mr-2 ${isMale ? "bg-blue-500" : "bg-pink-500"}`}></span>
                            {isMale ? "Male" : "Female"}
                        </div>
                    </div>

                    {/* Confidence Section */}
                    <div className="mt-8 space-y-4">
                        <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg p-4">
                            <p className="text-gray-600 text-sm mb-2">Confidence Level</p>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-gray-800">{confidencePercentage}%</p>
                                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: `conic-gradient(${isMale ? '#3b82f6' : '#ec4899'} 0deg ${userData.probability * 360}deg, #e5e7eb ${userData.probability * 360}deg 360deg)` }}>
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-gray-800">{Math.round(userData.probability * 100)}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Count Section */}
                        <div className={`rounded-lg p-4 ${isMale ? "bg-blue-50 border border-blue-200" : "bg-pink-50 border border-pink-200"}`}>
                            <p className={`text-sm font-semibold ${isMale ? "text-blue-700" : "text-pink-700"}`}>
                                Data Points
                            </p>
                            <p className="text-2xl font-bold text-gray-800 mt-1">
                                {userData.count}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataFetchServer
