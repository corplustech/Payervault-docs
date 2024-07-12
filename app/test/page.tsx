"use client"

import data from "./function"

export default function Page(){
    const handleClick = async() => {
        console.log("clicked");
        const length = await data();
        const string = `the length of the array is: ${length}`;
        alert(string);
    }


    return <>
        <button className="border-2 p-2 font-bold" onClick={handleClick}>Click me</button>

    </>
}