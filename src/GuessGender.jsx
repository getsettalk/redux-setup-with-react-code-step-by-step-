import React, { useEffect, useState } from "react";

function GuessGender () {
    const [uname,setUname] = useState("");
    const [data,setData] = useState("");
    useEffect(()=>{
      fetch(`https://api.genderize.io?name=${uname}`)
      .then((x)=>x.json())
      .then((y)=>{
        //console.log(y)
        setData(y)
    })
    },[uname]);
    return (
        <>
            <h2 >Enter your name And i will guess what your gender :</h2>
            <div>
                <input type="text" name="uname" id="uname" value={uname} placeholder="User name" onChange={(e)=>setUname(e.target.value)} />
            </div>
            <div>
                <h1>Name: {data.name}</h1>
                <h1>gender: {(data.gender === null) ?"can't guess" :data.gender }</h1>
                <h4>probability: {data.probability}</h4>
            </div>
        </>
    )
}
export default GuessGender;