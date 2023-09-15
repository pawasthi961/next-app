import React, { useState,useEffect } from 'react';
import useSWR from 'swr';
export default function Test(){
    const [text,setText] = useState("")
    // const fetcher = (url) => fetch(url).then((res) => res.json());
    // const { data, error } = useSWR('/api/staticdata', fetcher);

    useEffect(()=>{
        console.log("text : ",text);
        setText("hello")
    },[text])

    const onFetch = () =>{
        fetch('http://localhost:3000/api/staticData',{method : 'GET'}).then((res) => res.json()).then((res)=>{
            console.log(res)
        })

    }
    const onSave = async () => {
        const response = await fetch('http://localhost:3000/api/staticData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: "Lorenzo", email: "lo@lorenzozar.com" })
          });
          const data = await response.json();
          console.log(data);
      }
    return (
        <div>
            <h1>{text}</h1>
            <button onClick = {onFetch}>Fetch</button>
            <button onClick = {onSave}>Save</button>
        </div>

    );
}



//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format


