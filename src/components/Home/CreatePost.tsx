'use client'

import { useState } from "react"

export const CreatePost = () => {
    const [postText, setPostText] = useState('')
    
    const submitPost = async () =>{
      try {
        const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullname: 'username', postText: postText})
      });
      const data = await response.json();
      
      console.log(data);
      
      console.log(data, '-------------- CREATEPOST')
      return data
    } catch (error) {
      console.log(error, 'hey')
    } 
    }

  return (
    <div>
        <form onSubmit={submitPost} action="">
            <input type="text" name="postText" id="postText" onChange={(e) =>{setPostText(e.target.value)}}/>
            <button>Submit</button>
        </form>
    </div>
  )
}
