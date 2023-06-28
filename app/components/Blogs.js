
import { useEffect, useState, useContext } from 'react'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'


function Blogs() {
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([])
    const [totalPosts,setTotalPosts]=useState(0);
    const [page,setPage]=useState(1);

    const fetch1 = async (page=1)=>{
        try {
            setLoading(true);
            console.log("first")
            const res=await fetch("https://mocki.io/v1/cc97c2e2-97ba-4ace-9033-c8bef78ac1a9")
            console.log("second")
            let data=await res.json();
            console.log("data",data);
            if (!data || data.length === 0)
                throw new Error("Something Went Wrong");
                let tp=data.length;
                tp=tp/5;
                setTotalPosts(tp);
            let x=5*(page-1);
           data=data.slice(x,x+5);
            setPosts(data);
            console.log("posts",posts)
  
            console.log("total page",tp)
            setLoading(false);
    
        } catch (error) {
             alert(`no data found ${error}`);
        }
    }

   

      useEffect(()=>{
        console.log("hello")
        fetch1(page);
        // pagin()
      },[page])
  return (
    <div className='w-11/12 max-w-[670px] min-h-screen  '>
   

    {
        loading?(<div className=' min-h-screen flex flex-col justify-center items-center '><Spinner/></div>):(
            posts.size===0?(
                <p>No result Found</p>
            ):
            (posts.map((post)=>{
                return( <BlogDetails key={post.id} post={post}/>)
            }))
        )
    }
    <div className=' left-[0px] w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
    <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
      <div className='flex gap-x-2'> 
        
        { page > 1 &&
            (<button 
            className='rounded-md border-2 px-4 py-1'
            onClick={() => setPage(page-1)}>
                Previous
            </button>)
        }

        { page < totalPosts && 
                (<button 
                className='rounded-md border-2  px-4 py-1'
                onClick={() =>setPage(page+1) }>
                Next
            </button>)
        }

      </div>
       

        <p className='font-bold text-sm'>
            Page {page} of {totalPosts}
        </p>
      </div>
    </div>
</div>
  )
}

export default Blogs
