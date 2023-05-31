import React from 'react'

export default function page() {
  return (
      <main>
      
      <section className='h-[auto] w-[350px] bg-black mx-auto my-8 text-sky-600 pb-5 rounded-lg'>
           
        <div className='h-[200px]'>          
            <Image className='w-[100%]' src={padlock} alt='password' height={200} width={200}/>
        </div>
        
          <div className='flex justify-around p-1 mx-auto border-b-2 border-blue-700 uppercase'>
            <button>reset password</button>
            <button>forgot password</button>
          </div>
   
          <div>
          <form className='flex flex-col items-center justify-between h-[80px] w-[200px] mt-8 mx-auto '>          
            <input className='border rounded-2xl p-1 pl-3 placeholder:text-black' type="text" name='user' id='user' placeholder='username' />  
      
            <input className='border rounded-2xl p-1 pl-3 placeholder:text-black' type="text" name='password' id='pass'placeholder='password'/>    
        </form>
        </div> 
        <div className='flex flex-col items-center justify-between h-[120px] w-[200px]  mx-auto mt-6 p-1 '>
          <p className='border-b-4 border-blue-950'>  SIGN IN</p>
         
        </div>
      
      </section>
   
    </main>
    
  )
}
