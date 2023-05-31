export default function page() {
  return (
    <div className='h-[auto] w-[100%] bg-black mx-auto text-white pb-5 rounded-lg'>
        <div className='h-[200px]'>          
        <Image className='w-[100%]' src={padlock} alt='password' height={200} width={200} />
        </div>
    
      <div className='flex justify-around p-1 mx-auto border-b-2 border-blue-700 uppercase'>
        <Link href={'./Reset'}>
            <h2>reset password</h2>
        </Link>

        <Link href={'./Forgot'}>
            <h2>forgot password</h2>
        </Link>
       

          </div>
    </div>
  )
}

