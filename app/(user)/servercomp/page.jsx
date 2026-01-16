import React from 'react'

const ServerComp = async () => {

    const URL = "https://jsonplaceholder.typicode.com/posts";

    const res = await fetch(URL);
    const data = await res.json();
    //   console.log(data);

    return (
        <>
            <div>
                <h1>Server Component</h1>
            </div>
            <ul className="grid grid-cols-3 gap-5">
                {data.map((curElem, index) => {
                    return <li key={index}> {curElem.body} </li>;
                })}
            </ul>
        </>
    )
}

export default ServerComp
