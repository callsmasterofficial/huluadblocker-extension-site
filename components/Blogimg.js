import React from 'react'

import siteConfig from '../siteConfig'
import Link from "next/link"

function Blogimg({data}) {
 
  return (
    <div className='main-blog-img-container w-screen mb-[15%]'>
    <div className='blogimg-container  p-2 w-[80%] m-auto mb-6 md:mb-0 '>
          <div className='text-box  primary_text_color'>
          <h2 className='primary_text_color text-3xl font-semibold m-5 '>Blog</h2>
          </div>
        {/* Image Starts here */}
           
           
        <main className='main-div md:grid md:grid-cols-3' >

          {/* map starts here */}
             {data.map((item)=>(
              <Link href={`${siteConfig.blogUrl}/${item.slug}`} key={item._id}>
                <div className='blog-box border-2 border-white w-auto shadow-sm m-1 rounded-sm' style={{boxShadow: "3px 3px 2px #888888"}} >
                  
                
                <div className='img-box' >
                    <img className='w-[680px]  object-contain cursor-pointer' src={item.featured_image} alt="" />
                </div>
                
                <div className='text-box primary_text_color text-center p-3 mt-10'>
                   <h3 className='primary_text_color text-xl font-semibold'>{item.title}</h3>
                   <span className="primary_text_color text-base font-normal mb-4">{item.createdAt.slice(0,10)}</span>
                   <p className='primary_text_color text-base font-light mt-3'>
                   {item.meta_description}
                   </p>
                   
                   <span className='primary_text_color font-light mt-1 cursor-pointer'>Read More »</span>
                   
              </div>
              </div>
              </Link>
             ))}
      </main>
      
      {/* imageEnds here */}
    </div>
    </div>
  )
}

export default Blogimg

  // const data = [
  //   {
  //     id: 1,
  //     img: "https://www.hbomaxwatchparty.com/wp-content/uploads/2022/04/The-Batman-is-coming-to-HBO-Max-earlier-than-we-thought.jpg",
  //     heading: "The Batman Is Coming To Hbo Max Earlier Than We Thought",
  //     comment: 'April 16, 2022  No Comments',
  //     description: "The Batman Is Coming To Hbo Max Earlier Than We Thought Batman has given an official HBO Max release date. It’s interesting that it will",
  //     btn: "Read More »"
  //   },

  //   {
  //     id: 2,
  //     img: "https://www.hbomaxwatchparty.com/wp-content/uploads/2022/04/HBO-Max.jpg",
  //     heading: "What to Watch on HBO Max?",
  //     comment: 'December 21, 2021 / No Comments',
  //     description: "What to Watch on HBO Max? What to watch on HBO Max? It’s quite a popular streaming website amongst the binge-watchers. Therefore, HBO Max is",
  //     btn: "Read More »"
  //   },

  // ]