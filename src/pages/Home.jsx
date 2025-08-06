import React from 'react'

function Home() {
  return (
    <header className='w-full flex flex-col gap-2 h-5/6 p-5'>
      <div className='flex-4/6 flex rounded-2xl overflow-hidden'>
        <div className='bg-base-300 w-full h-full flex flex-col gap-2 justify-center items-center'>
          <h1 className='text-5xl font-bold text-base-content'>Choose Your Mood</h1>
          <p className='mb-5'>Select your current mood and we'll curate a playlist just for you.</p>

          <button className='inline-block px-5 py-2 rounded-full bg-primary shadow-md shadow-primary/40 hover:bg-primary/80 cursor-pointer text-base-300 font-semibold text-sm'>Happy</button>
        </div>
      </div>
      <div className='flex-2/6 flex justify-center items-center'>
        <div className="grid grid-cols-2 justify-center gap-2 w-2/6 h-2/4 mx-auto">
          <button className='inline-block px-5 py-2 rounded-full bg-primary shadow-md shadow-primary/40 hover:bg-primary/80 cursor-pointer text-base-300 font-semibold text-sm'>Sad</button>
          <button className='inline-block px-5 py-2 rounded-full bg-primary shadow-md shadow-primary/40 hover:bg-primary/80 cursor-pointer text-base-300 font-semibold text-sm'>Energetic</button>
          <button className='inline-block px-5 py-2 rounded-full bg-primary shadow-md shadow-primary/40 hover:bg-primary/80 cursor-pointer text-base-300 font-semibold text-sm'>Chill</button>
          <button className='inline-block px-5 py-2 rounded-full bg-primary shadow-md shadow-primary/40 hover:bg-primary/80 cursor-pointer text-base-300 font-semibold text-sm'>Focus</button>
        </div>
      </div>
    </header>
  )
}

export default Home;