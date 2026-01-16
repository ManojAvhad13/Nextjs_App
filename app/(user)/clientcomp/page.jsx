"use client"; // using this make a client component beacause in app file by default all files are server components and in client component not make async
import React, { useEffect, useState } from 'react'

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComp = () => {

    const [postData, setPostData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data);

            setPostData(data);

            return data;
        }

        fetchData();
    }, []);

    return (
        <>
            <div>
                Click Button To Say Hi
                <div>
                    <button className='bg-amber-500 text-amber-50 p-3' onClick={() => alert("Hii")}>Click Me</button>
                </div>
            </div>

            <ul className='grid grid-cols-3 gap-5'>
                {postData.map((curElem, index) => {
                    return <li key={index}> {curElem.body} </li>
                })}
            </ul>
        </>
    )
}

export default ClientComp
