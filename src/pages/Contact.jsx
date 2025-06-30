import { useState } from "react"

export function Contact(){

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[comment, setComment] = useState("")

    function handleSubmit(){
        //Potentical DB + API Call to contact company ahead
    }

    return(
        <>
            <div>
                <h1>Contact Us Below:</h1>
                <input onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input onChange={(e) => setComment(e.target.value)} placeholder="Question/Comment"/>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        </>
    )
}