const DataFetchServer = async (props) => {

    const searchParams = await props.searchParams;
    const userName = searchParams.name;

    // Handle case where no name is provided

    if (!userName) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            No Name Provided
                        </h1>
                        <p className="text-gray-600">
                            Please add ?name=yourname to the UTL
                        </p>
                    </div>
                </div>
            </div>
        )
    }


    const res = await fetch(`https://api.genderize.io/?name=${userName}`);
    const userData = await res.json();
    console.log(userData);
    const confidencePercentage = userData.probability * 100;

    return <h1>Data Fetching - {userData.name} - {userData.gender} - {confidencePercentage}%</h1>

}

export default DataFetchServer
