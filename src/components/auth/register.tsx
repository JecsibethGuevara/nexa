"use client"
import { signIn } from "next-auth/react";
import { FormEvent } from "react"
import { SetStateAction, useState } from 'react';
import { useRouter } from "next/navigation";


const RegisterPage = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  
  const  handleSignin = async (e: FormEvent <HTMLFormElement>) => {
    e.preventDefault()
    console.log(fullname, email, password)
    try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullname: fullname, email: email, password: password })
      });
      const data = await response.json();
      
   
      
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (res?.ok) return router.push('/')
      
      
    } catch (error) {
      console.log(error, 'hey')
    } 
  }

  return (
    <div className="flex justify-center align-center w-full  ">
      <form onSubmit={handleSignin} method="post" className="flex flex-col justify-center align-center w-full p-10">
        <h1 className="text-center text-5xl text-light">Sign In</h1>
        <input type="text" name="fullname" placeholder="John Doe" onChange={(e) => setFullname(e.target.value)} className=" w-full h-10 my-9 rounded-sm bg-transparent border-b border-light text-light"/>
        <input type="text" name="email" placeholder="someEmail@service.com" onChange={(e) => setEmail(e.target.value)} className=" w-full h-10 mb-9 rounded-sm bg-transparent border-b border-light text-light"/>
        <input type="password" name="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} className=" w-full h-10 mb-9 rounded-sm bg-transparent border-b border-light text-light"/>
        <button type="submit" className="bg-yellow rounded-sm text-background p-3">Submit SignIn</button>
      </form>
    </div>
  )
}

export default RegisterPage