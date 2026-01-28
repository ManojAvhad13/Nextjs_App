async function getData() {
    // simulate slow API
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return "This data is coming from server (dynamic)";
}



const DynamicSection = async () => {
    const data = await getData();
    return (
        <div className="p-6 border-2 border-blue-300 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Dynamic Data</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{data}</p>
        </div>
    )
}

export default DynamicSection
