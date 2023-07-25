'use client'
import { Children, useEffect } from 'react';
import LoginPage from '@/components/auth/login';
import RegisterPage from '@/components/auth/register';
import Panel from '@/components/auth/Panel'; 
import { useState } from 'react';
import { Navigation } from '@/components/global/Navigation';

function Page() {
    const [isActive, setIsActive] = useState(false)
    const [isNotActive, setIsNotActive] = useState(true)
    function changeUrl(url: string | URL | null | undefined) {
    window.history.pushState({}, '', url);
  }

  function handleClick() {
    
    console.log(location.href, "-----------------")
    if(location.href.includes("login")){
        changeUrl('/signin');
        setIsActive(true)
        setIsNotActive(false)
    }else{
        changeUrl('/login');
        setIsActive(false)
        setIsNotActive(true)
    }
  
}

const buttonClass = isActive ? '' : 'hidden';
const button = isNotActive ? '' : 'hidden';
  return (
    <div className='h-screen'>
      <Navigation/>
    <div className=" flex w-full justify-center h-5/6 px-20 pb-20 relative">
      <div className={`shadow-2xl flex align-center justify-center backdrop-blur-sm login h-full  basis-1/3 p-10 ${buttonClass}`}>
        <LoginPage />
      </div>
      <Panel>
            <button onClick={handleClick} className="bg-yellow">
            asjkdhajshd
            </button> 
        </Panel>
      <div className={`signin basis-1/3 shadow-2xl flex align-center justify-center backdrop-blur-sm h-full p-10 ${button}`}>
        <RegisterPage />
      </div>
      
        
    </div>
    </div>
  );
}

export default Page;