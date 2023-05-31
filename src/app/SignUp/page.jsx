import React from 'react'
import padlock from '../images/padlock.jpg'
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
  
    <main>
      
      <div className='h-[auto] w-[100%] bg-black mx-auto my-8 text-white pb-5 rounded-lg p-3'>
           
        {/* <div className='h-[200px]'>          
            <Image className='w-[100%]' src={padlock} alt='password' height={200} width={200}/>
        </div>
        
          <div className='flex justify-around p-1 mx-auto border-b-2 border-blue-700 uppercase'>
            <h2>sign in</h2>
            <h2>sign up</h2>
          </div> */}
   
        <div>
          
          <form className='flex flex-col items-center justify-between h-[120px] w-[200px] mt-8 mx-auto '>
            <input className='border rounded-2xl p-1 pl-3 placeholder:text-black' type="email" name='password' id='pass' placeholder='email' /> 
            
            <input className='border rounded-2xl p-1 pl-3 placeholder:text-black' type="text" name='user' id='user' placeholder='username' />  
      
            <input className='border rounded-2xl p-1 pl-3 placeholder:text-black' type="text" name='password' id='pass'placeholder='password'/>    
        </form>
        </div> 
        <div className='flex flex-col items-center justify-between h-[120px] w-[200px]  mx-auto mt-6 p-1 '>
          
          <Link href={'./SignIn'}>
          <p className='border-b-4 border-blue-950'> SIGN IN</p> 
          </Link>

          <Link href={'./' }>
             <button>forgot password?</button>
          </Link>
       
        </div>
      
      </div>
   
    </main>
    
  )
}
