import React from 'react'
import padlock from '../images/padlock.jpg'
import Image from 'next/image';
import Link from 'next/link';
 






export default function page() {
  return (
    <div className='h-[auto] w-[100%] bg-black mx-auto text-white pb-5 rounded-lg'>
        <div className='h-[200px]'>          
        <Image className='w-[100%]' src={padlock} alt='password' height={200} width={200} />
        </div>
    
      <div className='flex justify-around p-1 mx-auto border-b-2 border-blue-700 uppercase'>
        <Link href={'./SignIn'}>
            <h2>sign in</h2>
        </Link>

        <Link href={'./SignUp'}>
            <h2>sign Up</h2>
        </Link>
       

          </div>
    </div>
  )
}
