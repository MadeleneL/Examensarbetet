import React from 'react';
import { SignOut } from './SignOut';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { SendMessage } from './SendMessage'


function Chat (){
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(20).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))})  
    },[]);

    return(
        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
            <SignOut />
            {messages.map(({id, text, photoURL, createdAt}) => (
             <div> 
                <div style={{border: "2px black solid", borderRadius:"5px", width:"400px", margin: "20px", padding: "20px"}} key = {id}>
                        <img style= {{height: "60px",float:"right", borderRadius:"50%",}} src={photoURL} alt="" />
                        
                        <p style = {{position:"relative", bottom:"20px"}}>{new Date (createdAt.toDate()).toString()}</p>
                        <p>{text}</p>
                </div> 
            </div>
            ))}
            <SendMessage />
        </div>
        

    )
}

export default Chat