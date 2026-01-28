"use client";

import { useEffect } from "react";

const RandomJokes = () => {

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const fetchRandomJokes = async () => {
        const res = await fetch(URL);
        const data = await res.json()
        console.log(data);
    };

    useEffect(() => {
        fetchRandomJokes();
    }, []);

    return (
        <div>
            jokes
        </div>
    )
}

export default RandomJokes
