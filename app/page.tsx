'use client'

import Headerr from './components/Headerr'
import Blogs from './components/Blogs'
export default function Home() {
 
  
  return (



   <>
      <div>
            <Headerr/>
        </div>
        <div className=" my-[100px]  w-screen min-h-full flex flex-col justify-center items-center mt-[30px]" >
            <Blogs />
        </div>
       


   </>
  )
}
