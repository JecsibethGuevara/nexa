"use client"
import { signIn } from "next-auth/react";
import { FormEvent } from "react"
import { SetStateAction, useState } from 'react';
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  
  const  handleSignin = async (e: FormEvent <HTMLFormElement>) => {
    e.preventDefault()
    try {   
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      
      
      (res?.error) ?  router.push('/api/auth/error') : router.push('/')
      
     
    } catch (error) {
      console.log(error, 'An error has ocurred in login process')
    } 
  }

  return (
    <div className="flex justify-center align-center w-full ">
      
      <form onSubmit={handleSignin} method="post" className="flex flex-col justify-center align-center w-full p-10">
        <h1 className="text-center text-5xl text-light">Sign Up</h1>
        <input type="text" name="email" placeholder="someEmail@service.com" onChange={(e) => setEmail(e.target.value)} className=" w-full h-10 my-9 rounded-sm bg-transparent border-b border-light text-light" />
        <input type="password" name="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} className=" w-full h-10 mb-9 rounded-sm bg-transparent border-b border-light text-light"/>
        <button type="submit" className="bg-yellow rounded-sm text-background p-3">Submit SignIn</button>
      </form>
    </div>
  )
}

export default LoginPage